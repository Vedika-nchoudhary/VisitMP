import { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");

    try {
      setLoading(true);

      const response = await axios.post("http://localhost:8080/ai/chat", {
        message: currentMessage,
      });

      const botMessage = {
        sender: "bot",
        text: response.data.reply,
      };

      setChat((prev) => [...prev, botMessage]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}

      <button
        onClick={() => setOpen(!open)}
        className="
          btn
          shadow-lg
          rounded-circle
          position-fixed
          d-flex
          align-items-center
          justify-content-center
        "
        style={{
          bottom: "24px",
          right: "24px",

          width: "68px",
          height: "68px",

          background: "rgba(0, 57, 72, 0.92)",

          border: "1px solid rgba(255,255,255,0.15)",

          backdropFilter: "blur(14px)",

          zIndex: 1050,

          fontSize: "1.6rem",

          color: "white",
        }}
      >
        💬
      </button>

      {/* CHAT WINDOW */}

      {open && (
        <div
          className="
            position-fixed
            d-flex
            flex-column
            shadow-lg
          "
          style={{
            bottom: "105px",

            right: "24px",

            width: "370px",

            height: "580px",

            borderRadius: "30px",

            overflow: "hidden",

            background: "rgba(255,255,255,0.82)",

            backdropFilter: "blur(22px)",

            border: "1px solid rgba(255,255,255,0.6)",

            zIndex: 1050,
          }}
        >
          {/* HEADER */}

          <div
            className="
              d-flex
              justify-content-between
              align-items-center
              px-4
              py-3
            "
            style={{
              background: "linear-gradient(135deg,#003948,#0b5d6b)",

              color: "white",
            }}
          >
            <div>
              <h5 className="mb-0 fw-bold">MP Tourism AI</h5>

              <small
                style={{
                  opacity: 0.8,
                }}
              >
                Travel Assistant
              </small>
            </div>

            <button
              className="
                btn
                btn-sm
                text-white
                border-0
              "
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* CHAT AREA */}

          <div
            className="
              flex-grow-1
              p-3
              overflow-auto
            "
            style={{
              background: "#f5f7f4",
            }}
          >
            {chat.length === 0 && (
              <div
                className="
                  h-100
                  d-flex
                  flex-column
                  justify-content-center
                  align-items-center
                  text-center
                  px-4
                "
              >
                <div
                  className="
                    rounded-circle
                    d-flex
                    align-items-center
                    justify-content-center
                    mb-4
                  "
                  style={{
                    width: "90px",

                    height: "90px",

                    background: "rgba(0,57,72,0.08)",

                    fontSize: "2rem",
                  }}
                >
                  🌿
                </div>

                <h5
                  className="
                    fw-bold
                    mb-3
                  "
                  style={{
                    color: "#003948",
                  }}
                >
                  Ask About MP Tourism
                </h5>

                <p
                  className="text-muted"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >
                  Destinations, weather, culture, heritage, travel tips, food
                  and more.
                </p>
              </div>
            )}

            {/* MESSAGES */}

            {chat.map((msg, index) => (
              <div
                key={index}
                className={`
                    d-flex
                    mb-3
                    ${
                      msg.sender === "user"
                        ? "justify-content-end"
                        : "justify-content-start"
                    }
                  `}
              >
                <div
                  className="
                      px-3
                      py-2
                      shadow-sm
                    "
                  style={{
                    maxWidth: "82%",

                    borderRadius:
                      msg.sender === "user"
                        ? "18px 18px 4px 18px"
                        : "18px 18px 18px 4px",

                    background:
                      msg.sender === "user"
                        ? "linear-gradient(135deg,#003948,#0b5d6b)"
                        : "white",

                    color: msg.sender === "user" ? "white" : "#222",

                    fontSize: "0.95rem",

                    lineHeight: "1.6",

                    border:
                      msg.sender === "bot"
                        ? "1px solid rgba(0,0,0,0.05)"
                        : "none",
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* LOADING */}

            {loading && (
              <div className="d-flex justify-content-start">
                <div
                  className="
                    px-3
                    py-2
                    shadow-sm
                  "
                  style={{
                    borderRadius: "18px 18px 18px 4px",

                    background: "white",

                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="
                      spinner-border
                      spinner-border-sm
                      text-secondary
                    "
                  ></div>
                </div>
              </div>
            )}
          </div>

          {/* INPUT */}

          <div
            className="
              p-3
              border-top
            "
            style={{
              background: "rgba(255,255,255,0.9)",
            }}
          >
            <div
              className="
                d-flex
                align-items-center
                gap-2
              "
            >
              <input
                type="text"
                className="
                  form-control
                  rounded-pill
                  border-0
                  shadow-sm
                "
                placeholder="Ask anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                style={{
                  padding: "14px 18px",

                  background: "#f4f4f4",
                }}
              />

              <button
                onClick={sendMessage}
                className="
                  btn
                  rounded-circle
                  d-flex
                  align-items-center
                  justify-content-center
                  shadow-sm
                "
                style={{
                  width: "52px",

                  height: "52px",

                  background: "#003948",

                  color: "white",
                }}
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
