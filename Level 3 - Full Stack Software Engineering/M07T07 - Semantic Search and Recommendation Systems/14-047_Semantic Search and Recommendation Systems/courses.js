const courses = [
  {
    id: 1,
    title: "HTML and CSS Foundations",
    description: "Learn how to structure and style simple web pages.",
    embedding: [0.9, 0.1, 0.1]
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    description: "Build interactive web pages using JavaScript fundamentals.",
    embedding: [0.8, 0.3, 0.1]
  },
  {
    id: 3,
    title: "React Fundamentals",
    description: "Create component-based user interfaces with React.",
    embedding: [0.7, 0.6, 0.2]
  },
  {
    id: 4,
    title: "Node and Express APIs",
    description: "Build backend routes and APIs using Node.js and Express.",
    embedding: [0.2, 0.9, 0.2]
  },
  {
    id: 5,
    title: "MongoDB and Databases",
    description: "Store, query, and manage application data with MongoDB.",
    embedding: [0.1, 0.7, 0.6]
  },
  {
    id: 6,
    title: "Vector Search and AI Recommendations",
    description: "Use embeddings to build semantic search and recommendation features.",
    embedding: [0.2, 0.4, 0.9]
  }
];

const queryEmbeddings = {
  "web design": [0.9, 0.1, 0.1],
  "learn react": [0.7, 0.6, 0.2],
  "build backend APIs": [0.2, 0.9, 0.2],
  "AI search": [0.2, 0.4, 0.9],
  "database storage": [0.1, 0.7, 0.6]
};