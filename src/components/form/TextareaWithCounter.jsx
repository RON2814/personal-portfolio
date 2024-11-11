import React, { useState } from "react";

const TextareaWithCounter = ({ name, id }) => {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const maxLength = 255;

  const handleChange = (e) => {
    setMessage(e.target.value);
    setIsTyping(e.target.value.length > 0);
  };

  return (
    <div className="relative">
      <textarea
        name={name}
        id={id}
        placeholder="Enter a message"
        className="flex w-full input-field resize-none"
        value={message}
        onChange={handleChange}
        rows={6}
        maxLength={255}
        required
      />
      {isTyping && (
        <div className="absolute bottom-1 right-2">
          <span
            className={`text-[0.75rem] ${
              message.length > maxLength ? "text-red-500" : "text-gray-400"
            }`}
          >
            {message.length} / {maxLength}
          </span>
        </div>
      )}
    </div>
  );
};

export default TextareaWithCounter;
