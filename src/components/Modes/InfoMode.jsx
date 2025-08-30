import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import { socket } from "../../socket.js";

import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Cookies from "js-cookie";
import { FaCopy, FaEdit, FaCheck } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { BiSolidEditAlt } from "react-icons/bi";

import { IoSend } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useAppContext } from "../../Context.jsx";
import newChatIcon from '../../assets/new_chat.png';



function InfoMode({ }) {

  document.title = 'INAI : Information Mode';

  const { InfoModeResponses, setInfoModeResponses } = useAppContext();
  const textareaRef = useRef(null);

  const [loadedFromStorage, setLoadedFromStorage] = useState(false);
  const [typedMessages, setTypedMessages] = useState({});
  const [randomMsg, setRandomMsg] = useState("");
  const [Conversation_Id, setConversation_Id] = useState("")

  useEffect(() => {
    InfoModeResponses.forEach((r, idx) => {
      if (r.role === "bot" && !typedMessages[idx]) {
        let words = r.content.split(" "); // split by space for word-by-word
        let current = 0;

        const interval = setInterval(() => {
          current++;
          setTypedMessages(prev => ({
            ...prev,
            [idx]: words.slice(0, current).join(" ")
          }));

          if (current === words.length) clearInterval(interval);
        }, 50); // 50ms per word
      }
    });
  }, [InfoModeResponses]);



  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // reset height
      textarea.style.height = Math.min(textarea.scrollHeight, 10 * 24) + "px";
      // 24px ≈ line-height; max 10 lines
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.target.form.requestSubmit(); // ✅ submit the form programmatically
    }
  };


  // load from storage
  useEffect(() => {
    const savedResponses = sessionStorage.getItem("InfoModeResponses");
    if (savedResponses) {
      setInfoModeResponses(JSON.parse(savedResponses));
    }
    setLoadedFromStorage(true);
  }, []);

  // save to storage
  useEffect(() => {
    if (!loadedFromStorage) return;
    sessionStorage.setItem("InfoModeResponses", JSON.stringify(InfoModeResponses));
  }, [InfoModeResponses, loadedFromStorage]);


  const BASE_URL = import.meta.env.VITE_SOCKET_IO;

  const [editingCodeId, setEditingCodeId] = useState(null);
  const [editedCode, setEditedCode] = useState("");


  const inputRef = useRef(null);
  const [copiedMap, setCopiedMap] = useState({});

  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean); // remove empty strings
  const ChatMode = segments.pop()?.toLocaleLowerCase(); // last item

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [User_ID, setUser_ID] = useState("");
  const [firstMessage, setFirstMessage] = useState(() => {
    const savedResponses = localStorage.getItem("InfoModeResponses");
    return !savedResponses; // true only if no saved responses
  });
  const [reactionMap, setReactionMap] = useState({});

  const navigate = useNavigate()





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
      setConversation_Id(data.conversation_id);

      return data.conversation_id;  // ✅ return it directly

    } catch (err) {
      console.error("❌ Error creating chat:", err);
    }
  };



  useEffect(() => {
    const messages = [
      "Hello, {username}. Explore Knowlege Starting Here...",
      "Hey, How can i Assist You?",
      "Welcome, {username}. Got a Question? I'm here to help",
      "Good to see you, {username}. Where discoury begins",
      "What’s up? Being Exploring new ideas here...",
      "Hi, {username}. The foundatioy of learing status here...",
      "Hello! I'm INAI—how can I help you today?"
    ];

    setRandomMsg(messages[Math.floor(Math.random() * messages.length)])

  }, [firstMessage])

  // Inside InfoMode component
  useEffect(() => {
    if (!User_ID) return; // Wait until User_ID is ready

    // Register user
    socket.emit("register_user", { user_id: User_ID });

    // Listen to server InfoModeResponses
    const responseListener = (data) => {
      // console.log(data);
      if (data.text) {
        setInfoModeResponses((prev) => [...prev, { role: "bot", content: data.text }]);
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
    });

    return () => {
      socket.off("response", responseListener);
      socket.off("disconnect", disconnectListener);
      socket.off("mode_change");
    };
  }, [User_ID]);



  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setListening(true);
    }

    // Stop on unmount
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        setListening(false);
      }
    };
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



  const recognitionRef = useRef(null);
  const [listening, setListening] = useState(false);

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
      recognition.interimResults = false;
      recognition.continuous = true;

      recognition.onresult = async (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            transcript += event.results[i][0].transcript;
          }
        }

        const capturedText = transcript.trim();
        if (capturedText) {
          let convId = Conversation_Id; // current state

          if (firstMessage) {
            convId = await createNewChat(capturedText); // ✅ use returned id
            setFirstMessage(false);
          }
          setInfoModeResponses((prev) => [
            ...prev,
            { role: "user", content: capturedText },
          ]);

          const payload = {
            user_id: User_ID,
            mode: ChatMode.toLowerCase(),
            text: capturedText,
            conversation_id: convId
          };
          socket.emit("user_message", payload);
        }
      };

      recognition.onstart = () => {
        setListening(true);
      };

      recognition.onend = () => {
        setListening(false);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setListening(false);
      };

      recognitionRef.current = recognition;
    }

    try {
      if (!listening) {
        // ✅ Start mic
        await navigator.mediaDevices.getUserMedia({ audio: true });
        recognitionRef.current.start();
        setListening(true);
      } else {
        // ✅ Stop mic
        recognitionRef.current.stop();
        setListening(false);
      }
    } catch (err) {
      console.error("Mic error:", err);
      alert("Please allow microphone access.");
    }
  };





  const handleCopy = async (text, codeId) => {

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }

      setCopiedMap((prev) => ({ ...prev, [codeId]: true }));
      setTimeout(() => {
        setCopiedMap((prev) => ({ ...prev, [codeId]: false }));
      }, 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };



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

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [InfoModeResponses]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = inputRef.current.value.trim();
    if (!msg) return;

    textareaRef.current.value = "";

    // ✅ Reset height if you're auto-resizing
    textareaRef.current.style.height = "auto";

    let convId = Conversation_Id; // current state
    if (firstMessage) {
      convId = await createNewChat(msg); // ✅ use returned id
      setFirstMessage(false);
    }

    // const mode = getModeFromURL();
    setInfoModeResponses((prev) => [...prev, { role: "user", content: msg }]);
    inputRef.current.value = "";

    const payload = { user_id: User_ID, mode: ChatMode.toLowerCase(), text: msg, conversation_id: convId };

    socket.emit("user_message", payload);
  };

  const handleNewChat = async () => {
    setInfoModeResponses([]);        // clear old messages
    localStorage.removeItem("InfoModeResponses"); // also remove from storage

    setFirstMessage(true);   // reset so next msg triggers createNewChat()
    setConversation_Id("")

  };


  return (
    <>
      <div className="w-full h-screen relative bg-gradient-to-b font-inter from-[#181114] to-[#510813] overflow-hidden">
        {/* Chat box */}
        <Navbar onNewChat={handleNewChat} />

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:w-3/5 w-full p-4">
          <div className="my-2 p-3 text-white text-sm sm:text-lg flex flex-col h-[72vh] sm:h-[75vh] overflow-y-auto scrollbar-none">
            {InfoModeResponses.length === 0 ? (
              <div className="bg-gradient-to-r from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] font-bold bg-clip-text text-transparent text-center sm:text-2xl text-sm flex justify-center items-end h-full">
                {randomMsg.replace("{username}", username.charAt(0).toUpperCase() + username.slice(1))}
              </div>
            ) : ''}

            {InfoModeResponses.map((r, idx) => {
              const lines = r.content.split('\n'); // preserve newlines

              // Function to parse inline formatting
              const parseInlineFormatting = (text) => {
                const elements = [];
                const regex = /\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*/g;
                let lastIndex = 0;
                let match;

                while ((match = regex.exec(text)) !== null) {
                  if (match.index > lastIndex) {
                    elements.push(text.slice(lastIndex, match.index));
                  }
                  if (match[1]) {
                    elements.push(<span key={lastIndex} className="font-bold italic">{match[1]}</span>);
                  } else if (match[2]) {
                    elements.push(<span key={lastIndex} className="font-bold">{match[2]}</span>);
                  } else if (match[3]) {
                    elements.push(<span key={lastIndex} className="italic">{match[3]}</span>);
                  }
                  lastIndex = regex.lastIndex;
                }

                if (lastIndex < text.length) {
                  elements.push(text.slice(lastIndex));
                }

                return elements;
              };




              const handleSaveEditedCode = (msgIdx, codeId, editedCode) => {
                setInfoModeResponses((prev) =>
                  prev.map((msg, i) => {
                    if (i !== msgIdx) return msg;

                    const lines = msg.content.split("\n");
                    let newContentLines = [];
                    let isInCodeBlock = false;
                    let currentBlockId = 0;
                    let currentLanguage = "plaintext";

                    for (let j = 0; j < lines.length; j++) {
                      const line = lines[j];
                      const trimmed = line.trim();

                      if (trimmed.startsWith("```")) {
                        if (!isInCodeBlock) {
                          // Start of code block
                          isInCodeBlock = true;
                          currentLanguage = trimmed.replace(/```/, "").trim() || "plaintext";

                          // Push the opening ``` line
                          if (`${i}-${currentBlockId}` === codeId) {
                            // This is the block we want to replace
                            newContentLines.push("```" + currentLanguage);
                            newContentLines.push(...editedCode.split("\n"));
                          } else {
                            newContentLines.push(line); // keep original opening ```
                          }

                        } else {
                          // End of code block
                          if (`${i}-${currentBlockId}` === codeId) {
                            // Push closing ``` for edited block
                            newContentLines.push("```");
                          } else {
                            newContentLines.push(line); // keep original closing ```
                          }

                          isInCodeBlock = false;
                          currentBlockId++;
                        }

                      } else {
                        if (isInCodeBlock) {
                          // If this is the block we are editing, skip old code lines
                          if (`${i}-${currentBlockId}` !== codeId) {
                            newContentLines.push(line);
                          }
                        } else {
                          // Normal text outside code block
                          newContentLines.push(line);
                        }
                      }
                    }

                    return {
                      ...msg,
                      content: newContentLines.join("\n"),
                    };
                  })
                );

                setEditingCodeId(null);
                setEditedCode("");
              };



              const parsedElements = [];
              let codeBuffer = [];
              let isInCodeBlock = false;
              let currentLanguage = "plaintext";   // ✅ FIX: declare here
              let codeBlockCount = 0; // track multiple code blocks per message

              // ✅ CHANGED: replaced lines.forEach with normal for-loop
              for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
                const line = lines[lineIdx];
                const trimmedLine = line.trim();

                // ✅ Handle code blocks
                if (trimmedLine.startsWith("```")) {

                  if (isInCodeBlock) {
                    const codeString = codeBuffer.join("\n");
                    const codeId = `${idx}-${codeBlockCount++}`; // unique per block
                    const blockLanguage = currentLanguage;  // ✅ store language for this block

                    parsedElements.push(
                      <div key={"code-" + codeId}>
                        <div className="bg-[#000000] rounded-xl text-white ">
                          <div className="flex justify-between items-center gap-2 rounded-xl p-2 sticky -top-3 bg-[#000000]">
                            <span className="p-1 text-sm">{blockLanguage}</span>
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleCopy(codeString, codeId)}
                                className="p-1 rounded bg-black text-white cursor-pointer"
                              >
                                {copiedMap[codeId] ? <FaCheck /> : <FaRegCopy />}
                              </button>
                              <button
                                onClick={() => {
                                  if (editingCodeId === codeId) {
                                    handleSaveEditedCode(idx, codeId, editedCode, blockLanguage);
                                  } else {
                                    setEditingCodeId(codeId);
                                    setEditedCode(codeString);
                                  }
                                }}
                                className="p-1 rounded bg-black text-white cursor-pointer flex items-center justify-center"
                                title="Edit"
                              >
                                {editingCodeId === codeId ? <FaCheck /> : <BiSolidEditAlt />}
                              </button>
                            </div>
                          </div>

                          <div className="bg-black history overflow-x-auto rounded-lg">
                            {editingCodeId === codeId ? (
                              <textarea
                                rows={codeString.split("\n").length}
                                value={editedCode}
                                onChange={(e) => setEditedCode(e.target.value)}
                                className="w-full text-sm bg-black text-white rounded-lg p-3 resize-none focus:outline-none"
                              />
                            ) : (
                              <SyntaxHighlighter
                                language={blockLanguage || "plaintext"}
                                style={oneDark}
                                customStyle={{
                                  backgroundColor: "black",
                                  color: "white",
                                  borderRadius: "0.5rem",
                                  fontSize: "0.875rem",
                                  lineHeight: "1.5",
                                }}
                                codeTagProps={{ style: { color: "white" } }}
                              >
                                {codeString}
                              </SyntaxHighlighter>
                            )}

                            {/* ✅ Fix: Use blockLanguage for download */}
                            <div className="flex justify-end items-center px-1 py-2 bg-[#000000] rounded-md shadow-md">
                              <button
                                onClick={() => {
                                  const lang = (blockLanguage || "plaintext").toLowerCase();
                                  const languageToExtension = {
                                    javascript: "js",
                                    jsx: "jsx",
                                    typescript: "ts",
                                    tsx: "tsx",
                                    python: "py",
                                    java: "java",
                                    csharp: "cs",
                                    cpp: "cpp",
                                    c: "c",
                                    html: "html",
                                    css: "css",
                                    json: "json",
                                    plaintext: "txt",
                                  };
                                  const ext = languageToExtension[lang] || "txt";

                                  const blob = new Blob([codeString], {
                                    type: "application/octet-stream",
                                  });
                                  const url = URL.createObjectURL(blob);
                                  const a = document.createElement("a");
                                  a.href = url;
                                  a.download = `code-snippet.${ext}`;
                                  a.click();
                                  URL.revokeObjectURL(url);
                                }}
                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white text-black hover:bg-gray-100 transition-all text-xs sm:text-sm font-medium cursor-pointer whitespace-nowrap"
                                title="Download code"
                              >
                                Download File
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );

                    codeBuffer = [];
                    isInCodeBlock = false;
                  }
                  else {
                    isInCodeBlock = true;
                    const lang = trimmedLine.replace(/```/, "").trim();
                    currentLanguage = lang || "plaintext";
                  }

                  continue; // ✅ CHANGED
                }

                // ✅ If inside code block, collect lines
                if (isInCodeBlock) {
                  codeBuffer.push(line);
                  continue; // ✅ CHANGED
                }





                // ✅ Handle Headings
                if (/^#{1,6}\s/.test(trimmedLine)) {
                  const level = trimmedLine.match(/^#+/)[0].length; // number of #
                  const content = trimmedLine.replace(/^#{1,6}\s*/, ""); // remove ### part

                  let className = "";
                  switch (level) {
                    case 1:
                      className = "text-3xl font-bold";
                      break;
                    case 2:
                      className = "text-2xl font-semibold ";
                      break;
                    case 3:
                      className = "text-xl font-semibold "; // ✅ your case
                      break;
                    case 4:
                      className = "text-lg font-semibold ]";
                      break;
                    case 5:
                      className = "text-[16px] font-medium ";
                      break;
                    case 6:
                      className = "text-[16px] font-medium ";
                      break;
                    default:
                      className = "text-base font-medium";
                  }

                  parsedElements.push(
                    <div key={lineIdx} className={className}>
                      {parseInlineFormatting(content)}
                    </div>
                  );
                  continue; // ✅ CHANGED
                }

                // ✅ Handle markdown tables
                if (trimmedLine.startsWith("|")) {
                  const nextLine = lines[lineIdx + 1]?.trim();
                  if (nextLine && /^(\|\s*-+\s*)+\|?$/.test(nextLine)) {
                    const tableRows = [];
                    let tIdx = lineIdx;

                    while (lines[tIdx] && lines[tIdx].trim().startsWith("|")) {
                      tableRows.push(lines[tIdx].trim());
                      tIdx++;
                    }

                    const headers = tableRows[0]
                      .split("|")
                      .map(h => h.trim())
                      .filter(h => h.length > 0);

                    const body = tableRows.slice(2).map(row =>
                      row
                        .split("|")
                        .map(cell => cell.trim())
                        .filter(cell => cell.length > 0)
                    );

                    parsedElements.push(
                      <table
                        key={`table-${lineIdx}`}
                        className="border border-gray-400 my-2 w-full text-left border-collapse"
                      >
                        <thead>
                          <tr>
                            {headers.map((h, i) => (
                              <th
                                key={i}
                                className="border border-gray-400 p-2 font-bold"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {body.map((r, ri) => (
                            <tr key={ri}>
                              {r.map((cell, ci) => (
                                <td key={ci} className="border border-gray-400 p-2">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    );

                    lineIdx = tIdx - 1; // ✅ CHANGED: skip processed rows
                    continue;
                  }
                }



                // ✅ FIX: handle lists properly
                if (trimmedLine.startsWith("* ")) {
                  const listItems = [];
                  let lIdx = lineIdx;

                  while (lines[lIdx] && lines[lIdx].trim().startsWith("* ")) {
                    listItems.push(lines[lIdx].trim().slice(2));
                    lIdx++;
                  }

                  parsedElements.push(
                    <ul key={`list-${lineIdx}`} className="ml-5 list-disc">
                      {listItems.map((item, i) => (
                        <li key={i}>{parseInlineFormatting(item)}</li>
                      ))}
                    </ul>
                  );

                  lineIdx = lIdx - 1; // ✅ skip processed list lines
                  continue;
                }

                // ✅ Default: normal text
                parsedElements.push(
                  <div key={lineIdx}>{parseInlineFormatting(trimmedLine)}</div>
                );
              }


              return (
                <div
                  key={idx}
                  className={`p-1 my-1 rounded break-words ${r.role === "user"
                    ? "bg-[#ffffffaf] rounded-xl px-3 text-black self-end max-w-8/12"
                    : "rounded-xl p-2 flex flex-col gap-3 self-start w-full"
                    }`}
                >
                  {parsedElements}
                </div>
              );
            })}


            <div ref={chatEndRef} />
          </div>

          <form className="relative flex justify-between bg-[#00000085] p-1 items-end rounded-2xl" onSubmit={handleSubmit}>
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
              className=" p-2 flex sm:gap-2 gap-1 justify-center items-center"
            >

              <div className="relative group">
                <button
                  type="button"
                  className={`cursor-pointer p-2 rounded-full flex justify-center items-center transition-all duration-300 ${listening
                    ? "bg-red-500 text-white"
                    : "bg-transparent hover:bg-gray-200 text-white hover:text-black"
                    }`}
                  onClick={handleMicClick}
                  aria-label="Mic"
                >
                  <IoMicOutline className="text-[20px]" />
                </button>
                <span className="absolute left-1/2 transform -translate-x-1/2 top-[-28px] bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  Mic
                </span>
              </div>

              <button
                className="cursor-pointer bg-white p-2 rounded-full hover:bg-gray-300 flex justify-center items-center"
                type="submit"
                aria-label="Send"
              >

                <IoSend className="text-[20px] p-[2px]" />

              </button>
            </div>
          </form>


        </div>
      </div>

    </>
  )
}

export default InfoMode