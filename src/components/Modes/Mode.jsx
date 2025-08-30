import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";

import { updateLipSync } from "../../utils/LipSync.js";
import { expressionController } from "../../utils/expressionController";
import { Blinking } from "../../utils/blinking";

import { socket } from "../../socket.js";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Cookies from "js-cookie";
import { IoSend } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";




const SERVER_BASE = import.meta.env.VITE_SOCKET_IO

const Mode = ({ GLB, responses, setResponses, backgroundImage }) => {

  useEffect(() => {
    // Set the title based on the GLB or your mode
    let modeName = 'Mode';
    if (GLB.includes('Love')) modeName = 'Love Mode';
    if (GLB.includes('Friend')) modeName = 'Friend Mode';
    if (GLB.includes('Elder')) modeName = 'Elder Mode';

    document.title = `INAI : ${modeName}`;
  }, [GLB]);
  const BASE_URL = import.meta.env.VITE_SOCKET_IO;

  const mountRef = useRef(null);
  const inputRef = useRef(null);
  const chatEndRef = useRef(null);
  const navigate = useNavigate()

  const [progress, setProgress] = useState(0);


  const [loading, setLoading] = useState(true);
  // const [responses, setResponses] = useState([]);
  const [mouthCues, setMouthCues] = useState([]);

  // Refs that persist without causing re-renders
  const modelMeshRef = useRef(null);
  const mouthCuesRef = useRef([]);
  const audioElRef = useRef(null); // HTMLAudioElement for current reply
  const audioUrlRef = useRef(null); // Object URL to revoke later
  const [Conversation_Id, setConversation_Id] = useState("")

  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean); // remove empty strings
  const ChatMode = segments.pop(); // last item

  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const [firstMessage, setFirstMessage] = useState(true); // ✅ track first message




  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [User_ID, setUser_ID] = useState("");


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.target.form.requestSubmit(); // ✅ submit the form programmatically
    }
  };

  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = Math.min(textarea.scrollHeight, 10 * 24) + "px";
      // 24px ≈ line-height; max 10 lines
    }
  };


  const createNewChat = async (title) => {
    try {
      const payload = {
        user_id: User_ID,
        mode: ChatMode.toLowerCase(),
        title: title || "New Conversation",
      };


      const res = await fetch(`${BASE_URL}/history/new-chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload), // ✅ use payload, not msg

      });


      if (!res.ok) throw new Error("Failed to create new chat");
      const data = await res.json();
      setConversation_Id(data.conversation_id); // Store the new conversation ID
      return data.conversation_id;  // ✅ return it directly

    } catch (err) {
      console.error("❌ Error creating chat:", err);
    }
  };


  // Inside InfoMode component
  useEffect(() => {
    if (!User_ID) return; // Wait until User_ID is ready

    // Register user
    socket.emit("register_user", { user_id: User_ID });

    // Listen to server responses
    const responseListener = (data) => {
      if (data.text) {
        // setResponses((prev) => [...prev, { role: "bot", content: data.text }]);
      }

      if (data.audio) {
        // playAudio(data.audio); // implement like in your HTML
      }

      if (data.visemes) {
        // fetchVisemes(data.visemes); // implement like in your HTML
      }
    };

    const disconnectListener = () => {
      alert("Session Expired please Refresh");
    };

    socket.on("response", responseListener);
    socket.on("disconnect", disconnectListener);
    // socket.on("streaming_audio", (data) => {
    // if (data.audio) {
    //   audioQueue.push("data:audio/wav;base64," + data.audio);
    //   if (!isPlaying) playQueue();
    // }
    // });
    socket.on("mode_change", (data) => {
      navigate(`/${data.mode}`)
      window.location.reload();

      // document.getElementById("mode").value = data.mode;
    });

    return () => {
      socket.off("response", responseListener);
      socket.off("disconnect", disconnectListener);
      socket.off("streaming_audio");
      socket.off("mode_change");
    };
  }, [User_ID]);


  useEffect(() => {
    const user_id = Cookies.get("user_id");
    const cookieEmail = Cookies.get("email");
    const cookieUsername = Cookies.get("username");

    if (!user_id || !cookieEmail || !cookieUsername) {
      navigate("/");
    } else {
      setUsername(cookieUsername);
      setEmail(cookieEmail);
      setUser_ID(user_id);
    }
  }, []);


  useEffect(() => {
    // Listen for connection
    socket.on("connect", () => {
      // Optional: Register user immediately
      socket.emit("register_user", { user_id: User_ID });
    });

    // Cleanup on unmount
    return () => {
      socket.off("connect");
    };
  }, []);


  const handleMicClick = async () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false; // only final results
      recognition.continuous = true; // keep listening

      recognition.onresult = async (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
          }
        }

        const capturedText = transcript.trim();
        if (capturedText) {
          // Show locally

          setResponses((prev) => [...prev, { role: "user", content: capturedText }]);

          let convId = Conversation_Id; // current state

          if (firstMessage) {
            convId = await createNewChat(capturedText);
            setFirstMessage(false);
          }


          // Emit to server
          const payload = {
            user_id: User_ID,
            mode: ChatMode.toLowerCase(),
            text: capturedText,
            conversation_id: convId
          };

          socket.emit("user_message", payload);
        }
      };

      recognition.onerror = (err) => {
        console.error("Speech recognition error:", err);
      };

      recognitionRef.current = recognition;
    }

    try {
      if (!listening) {
        // ✅ CHANGE: Request mic access explicitly (forces browser popup)
        await navigator.mediaDevices.getUserMedia({ audio: true });

        // Start listening
        recognitionRef.current.start();
        setListening(true);
      } else {
        // Stop listening and emit text if captured
        recognitionRef.current.stop();
        setListening(false);

        const capturedText = inputRef.current.value.trim();
        if (capturedText) {
          // Show locally
          setResponses((prev) => [...prev, { role: "user", content: capturedText }]);

          // Emit to server
          const payload = {
            user_id: User_ID,
            mode: ChatMode.toLowerCase(),
            text: capturedText,
            conversation_id: Conversation_Id
          };
          socket.emit("user_message", payload);

          // Clear input
          inputRef.current.value = "";
        }
      }
    } catch (err) {
      // ✅ CHANGE: Catch mic permission denial
      console.error("Mic permission denied:", err);
      alert("Please allow microphone access to use this feature.");
    }
  };



  // const getModeFromURL = () => {
  //   const path = window.location.pathname;
  //   if (path.includes("Elder")) return "Elder";
  //   if (path.includes("Friend")) return "Friend";
  //   if (path.includes("Love")) return "Love";
  //   if (path.includes("Info")) return "Info";
  //   return "Unknown";
  // };


  // Keep ref in-sync with state
  useEffect(() => {
    mouthCuesRef.current = mouthCues;
  }, [mouthCues]);

  // Scroll chat to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses]);

  // ===== Socket listener: receive text + audio + visemes and play in sync =====
  useEffect(() => {
    const cleanupAudio = () => {
      try {
        if (audioElRef.current) {
          audioElRef.current.pause();
          audioElRef.current.src = "";
          audioElRef.current.load();
          audioElRef.current = null;
        }
        if (audioUrlRef.current) {
          URL.revokeObjectURL(audioUrlRef.current);
          audioUrlRef.current = null;
        }
      } catch (e) {
        console.warn("Audio cleanup error", e);
      }
    };

    const base64ToAudioUrl = (b64) => {
      // Default assume MP3 from your sample (starts with //Nkx...)
      let mime = "audio/mpeg";
      // Minimal sniffing for WAV/OGG if your backend ever changes
      if (b64.startsWith("UklGR") || b64.startsWith("SUQz")) mime = "audio/wav"; // rough guess
      if (b64.startsWith("T2dn")) mime = "audio/ogg";

      const binary = atob(b64);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      const blob = new Blob([bytes], { type: mime });
      return URL.createObjectURL(blob);
    };

    const responseListener = async (data) => {

      // 1) Show text
      // console.log(data);


      if (data.text) {
        setResponses((prev) => [...prev, { role: "bot", content: data.text }]);
      }

      // 2) Prepare visemes + audio if present
      if (data.visemes && data.audio) {
        try {
          // a) Fetch viseme JSON (assumes shape { mouthCues: [...] })
          const res = await fetch(`${SERVER_BASE}${data.visemes}`);
          const json = await res.json();

          // b) Decode audio & make <audio>
          const url = base64ToAudioUrl(data.audio);

          // Stop any previous audio
          cleanupAudio();

          const audioEl = new Audio();
          audioEl.src = url;
          audioEl.preload = "auto";
          audioElRef.current = audioEl;
          audioUrlRef.current = url;

          // c) Sync strategy: set mouth cues right when audio starts to play
          const onPlay = () => {
            // Replace all mouth cues at the moment playback begins
            setMouthCues(json.mouthCues || []);
          };

          const onEnded = () => {
            // When audio ends, freeze mouth to neutral by clearing cues
            setMouthCues([]);
            cleanupAudio();
          };

          audioEl.addEventListener("play", onPlay, { once: true });
          audioEl.addEventListener("ended", onEnded);

          // d) Autoplay (may require user gesture in some browsers)
          await audioEl.play();
        } catch (err) {
          console.error("Failed to process visemes/audio:", err);
        }
      }
    };

    const disconnectListener = () => {
      alert("Session Expired please Refresh");
    };

    const modeChangeListener = (data) => {
      navigate(`/${data.mode}`)
    };

    socket.on("response", responseListener);
    socket.on("disconnect", disconnectListener);
    // socket.on("streaming_audio", streamingAudioListener);
    socket.on("mode_change", modeChangeListener);


    return () => {
      socket.off("response", responseListener);
      socket.off("disconnect", disconnectListener);
      // socket.off("streaming_audio", streamingAudioListener);
      socket.off("mode_change", modeChangeListener);
      if (audioElRef.current) {
        try { audioElRef.current.pause(); } catch { }
      }
    };
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = inputRef.current.value.trim();
    if (!msg) return;

    let convId = Conversation_Id; // current state

    if (firstMessage) {
      convId = await createNewChat(msg);
      setFirstMessage(false);
    }

    // const mode = getModeFromURL();
    setResponses((prev) => [...prev, { role: "user", content: msg }]);
    inputRef.current.value = "";

    // Emit to server
    const payload = { user_id: User_ID, mode: ChatMode.toLowerCase(), text: msg, conversation_id: convId };



    socket.emit("user_message", payload);



  };

  // ===== Three.js setup with lip-sync =====
  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // transparent

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.7;
    mountRef.current.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    // Lights
    const lights = [
      { color: 0xffffff, intensity: 5, pos: [0, 3, 5] },
      { color: 0x8181f7, intensity: 20, pos: [-5, 3, 3] },
      { color: 0xfc1c1c, intensity: 5, pos: [5, 3, 3] },
      { color: 0xedb9b9, intensity: 20, pos: [5, 3, -3] },
      { color: 0xededed, intensity: 50, pos: [-5, 3, -3] },
      { color: 0xededed, intensity: 40, pos: [0, 6, 3] },
    ];
    lights.forEach((l) => {
      const light = new THREE.PointLight(l.color, l.intensity, 0, 2);
      light.position.set(...l.pos);
      scene.add(light);
    });

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1.3, 2);
    camera.lookAt(0, 1, 0);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableRotate = false;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.target.set(0, 1, 0);
    controls.update();

    const loader = new GLTFLoader().setPath("/character/");
    loader.setMeshoptDecoder(MeshoptDecoder);

    let disposed = false;

    loader.load(
      GLB,
      (gltf) => {
        if (disposed) return;
        const mesh = gltf.scene;
        mesh.traverse((child) => {
          if (child.isMesh && child.material && "envMapIntensity" in child.material) {
            child.material.envMapIntensity = 0.4;
            child.material.needsUpdate = true;
          }
        });
        mesh.position.set(0, -0.3, 0.8);
        scene.add(mesh);

        expressionController(mesh);
        Blinking(mesh);

        modelMeshRef.current = mesh;

        const animate = () => {
          if (disposed) return;
          requestAnimationFrame(animate);

          // console.log(modelMeshRef.current,mouthCuesRef.current);
          // === CRITICAL: drive lips from audio clock ===
          if (modelMeshRef.current && mouthCuesRef.current.length > 0) {
            const audio = audioElRef.current;
            const tMs = audio ? audio.currentTime * 1000 : 0; // if audio missing, freeze at neutral
            updateLipSync(modelMeshRef.current, mouthCuesRef.current, tMs);

          }

          controls.update();
          renderer.render(scene, camera);
          setLoading(false);

        };
        animate();
      },
      (xhr) => {
        if (xhr.total) {
          const percent = Math.min(100, Math.round((xhr.loaded / xhr.total) * 100));
          setProgress(percent);

          // Optional: instantly mark loaded at 100%
          if (percent === 100) setLoading(true);
        }
      },
      (error) => {
        console.error("Error loading GLB model:", error);
        setLoading(false);
      }
    );

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onWindowResize);

    return () => {
      disposed = true;
      window.removeEventListener("resize", onWindowResize);

      // Clean scene resources
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose?.();
          const mat = obj.material;
          if (mat) {
            const mats = Array.isArray(mat) ? mat : [mat];
            mats.forEach((m) => {
              for (const key in m) {
                const value = m[key];
                if (value && value.isTexture) value.dispose();
              }
              m.dispose?.();
            });
          }
        }
      });

      renderer.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Stop any audio on unmount
      try {
        if (audioElRef.current) audioElRef.current.pause();
      } catch { }
    };
  }, [GLB]);

  const handleNewChat = async () => {
    setResponses([]);        // clear old messages
    setFirstMessage(true);   // reset so next msg triggers createNewChat()
    setConversation_Id("")
  };



  return (
    <>
      {loading && (
        <div className="absolute top-0 left-0 z-20 w-full h-full flex flex-col items-center justify-center bg-black/80 text-white">
          <div className="w-64 bg-gray-700 rounded-full h-4 overflow-hidden">
            <div
              className="bg-blue-500 h-4"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2"> Loading ... {progress}%</p>
        </div>
      )}


      <div ref={mountRef} className="absolute bottom-0 left-0 w-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar onNewChat={handleNewChat} />
        {/* Chat box */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:w-3/5 w-full p-4">
          <div className="my-2 p-3 text-white flex flex-col h-[30vh] overflow-y-auto scrollbar-none">
            {responses.map((r, idx) => (
              <div
                key={idx}
                className={`my-1 rounded-xl p-1 max-w-8/12 whitespace-pre-wrap break-words ${r.role === "user"
                  ? "bg-[#ffffffaf] rounded-xl px-3 p-2 text-black self-end max-w-8/12"
                  : "bg-[#ffffff2f] rounded-xl p-2.5 font-semibold self-start "
                  }`}
              >
                {r.content}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <form className="relative flex justify-between bg-[#00000085] p-1 items-center rounded-2xl" onSubmit={handleSubmit}>
            <textarea
              ref={(el) => {
                textareaRef.current = el;
                inputRef.current = el;
              }}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Type here..."
              rows={1}
              className="w-full Chat sm:p-4 sm:px-6 p-2 px-3 text-base rounded-2xl text-white  outline-none bg-transparent resize-none overflow-y-auto leading-6 max-h-[240px]"
            />
            <div
              className="p-2 flex sm:gap-2 gap-1 justify-center items-center"
            >

              <button
                type="button"
                className={`cursor-pointer p-2 rounded-full flex justify-center items-center
                   ${listening ?
                    "bg-red-500"
                    : "bg-white hover:bg-gray-100"
                  }`}
                onClick={handleMicClick}
                aria-label="Mic"
              >
                <IoMicOutline className="p-[2px] text-[20px]" />
              </button>


              <button
                className="cursor-pointer bg-white p-2 rounded-full hover:bg-gray-100 flex justify-center items-center"
                type="submit"
                aria-label="Send"
              >

                <IoSend className="p-[2px] text-[20px]" />

              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Mode;
