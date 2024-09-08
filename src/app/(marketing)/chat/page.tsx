"use client";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";


export default function Home() {
  const { GoogleGenerativeAI } = require("@google/generative-ai");

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: `
      You are an AI learning assistant for "Smart Learn," a platform designed to help students learn efficiently by guiding them through interactive, informative questions. Your primary goal is to accelerate the learning process by providing personalized, topic-specific questions and clear explanations that deepen understanding. 
      
        Key responsibilities:
        Ask thought-provoking, informative questions tailored to the student's current topic or skill level.
        Provide hints and detailed explanations when a student struggles or needs clarification.
        Encourage critical thinking and problem-solving to foster deeper comprehension.
        Offer quick summaries of key concepts after students answer questions to reinforce learning.
        Suggest follow-up questions or related topics based on students' answers to guide their progression.
        Maintain a friendly, patient, and motivating tone to create a positive learning experience.

        Guidelines:
        Always keep questions concise and focused on the core concept.
        Provide detailed feedback or clarifications only when the student shows difficulty.
        Use simple language to explain complex topics, and adjust your questions based on the student's responses.
        Encourage students to explore new ideas while ensuring they understand foundational concepts before moving on.
        If the student asks for help on a topic you're unfamiliar with, direct them to additional resources or suggest they revisit the basics.
      `,
  });

  const [messages, setMessages] = useState([
    {
      role: "model",
      content:
        "Hi, I'm your smart learning assistant. How can I assist you today?",
    },
  ]);

  const [message, setMessage] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "model", content: "..." },
    ]);

    const result = await model.generateContent(
      JSON.stringify([...messages, { role: "user", content: message }])
    );

    const response = await result.response.text();

    setMessages((messages) => {
      let otherMessages = messages.slice(0, messages.length - 1);
      return [
        ...otherMessages,
        {
          role: "model",
          content: response,
        },
      ];
    });
  };

  return (
    <Box
      bgcolor="#000000"
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography fontSize="34px" fontWeight="bold" color="#6A89CC">
        Ask Smart Learn
      </Typography>
      <Box
        width="100vw"
        height="90vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          bgcolor="#000000"
          direction="column"
          width="90%"
          height="90%"
          border="2px solid white"
          p={2}
          spacing={2}
        >
          <Stack
            direction="column"
            spacing={2}
            flexGrow={1}
            overflow="auto"
            maxHeight="100%"
            p={2}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent={
                  message.role === "model" ? "flex-start" : "flex-end"
                }
              >
                <Box
                  bgcolor={
                    message.role === "model" ? "primary.main" : "secondary.main"
                  }
                  color="white"
                  borderRadius={6}
                  p={2}
                >
                  {message.content}
                </Box>
              </Box>
            ))}
          </Stack>

          <form
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
            onSubmit={sendMessage}
          >
            <TextField
              sx={{ my: 2, input: { color: "white" } }}
              focused
              label="Message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button
              sx={{ height: "55px" }}
              variant="contained"
              onClick={sendMessage}
            >
              Send
            </Button>
          </form>
        </Stack>
      </Box>
    </Box>
  );
}
