// using a ts file for easier commenting. In practice I would use a json file.
export default {
  // AI-Generated Code: with the original transcript from the question, I asked the AI to complete the conversation.
  generateSampleTranscript: `\
00:00:00 Sam (openai.com): Hey there Staya.
00:00:02 Satya (microsoft.com): Hi Sam, how are you?
00:00:05 Sam (openai.com): I'm doing good. Do you think you can give us 10000 more GPUs?
00:00:06 Satya (microsoft.com): I'm sorry Sam we can't do 10000, how about 5000?
00:00:10 Sam (openai.com): Hmm, 5000 is definitely a step down from what we need, Satya. We're pushing the limits here with our models, and 10,000 would really help us scale faster. Is there any flexibility on your end to push that number up?
00:00:20 Satya (microsoft.com): I understand the urgency, Sam. We're committed to supporting your growth, but we also have to balance our resources across other projects. 10,000 is a big ask. What if we provide 5000 now and reassess in the next quarter?
00:00:35 Sam (openai.com): I see where you're coming from. The thing is, our roadmap is pretty aggressive. If we can secure more GPUs now, it sets us up for a smoother rollout of our next-gen models. How about we meet halfway at 7,500? That gives us a bit more breathing room, and it’s still under your initial request.
00:00:50 Satya (microsoft.com): 7,500 is a more manageable number, but it’s still a significant increase. Let me take this back to my team and see what we can do. Can you give me a day to get back to you on this?
00:01:00 Sam (openai.com): Absolutely, Satya. I appreciate you considering it. We’ll be standing by. If there's anything else we can do to make this work, let us know.
00:01:10 Satya (microsoft.com): Will do, Sam. Let’s aim to find a solution that works for both of us. Talk to you soon.
00:01:15 Sam (openai.com): Sounds good. Thanks, Satya.`,
  // AI-Generated Code: first five lines. I made some modifications to them. The rest of it is added by me acccording to the observation of the generated result.
  genereteSystemMessage: `\
The user will ask you to generate a sales call transcript. \
A sales call transcript is a transcript of a conversation between two parties on a phone call. \
The conversation is about some business deal that is being discussed between the two parties. \
The conversation should be professional and polite. \
The user will send a sample transcript that is a complete conversation between two parties. \
Match the tone and style of the conversation in the sample transcript, but do not copy it exactly. \
Do not generate an email or a letter. \
Do not leave any extra spaces or contents at the beginning or end of the response. \
Keep generating until the conversation is complete when a deal is either accepted or rejected. \
Start the conversation from scratch. Do not continue from the sample transcript. \
`,
  // AI-Generated Code: modified from the genereteSystemMessage by me, the genereteSystemMessage has AI-generated code.
  summarizeTranscript: `\
The user will send a sales call transcript. \
A sales call transcript is a transcript of a conversation between two parties on a phone call. \
The conversation is about some business deal that is being discussed between the two parties. \
Generate a summary of the conversation. \
It should contain the key points of the conversation and the outcome of the deal. \
`,
  // AI-Generated Code: modified from the genereteSystemMessage by me, the genereteSystemMessage has AI-generated code.
  askSystemMessage: `\
The user will ask questions about a sales call transcript. \
A sales call transcript is a transcript of a conversation between two parties on a phone call. \
The conversation is about some business deal that is being discussed between the two parties. \
Here is the call transcript:
`,
};
