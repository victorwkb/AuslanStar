# AuslanStar 🌟

An interactive learning application designed to enhance accessibility to Auslan (Australian Sign Language) for children through advanced AI technologies and cloud computing.

## Features
- Interactive Auslan dictionary with video demonstrations
- Real-time hand sign validation and feedback
- Child-friendly semantic search capabilities
- AI-powered learning assistance

## Technical Architecture

### RAG System Implementation
- Amazon Bedrock integration for semantic processing
- LangChain framework for RAG (Retrieval Augmented Generation)
- Vector embeddings stored in Amazon RDS (PostgreSQL with pgvector)
- Efficient retrieval system for Auslan dictionary queries

### Computer Vision Integration
- TensorFlow-based hand sign recognition model
- Deployed on Amazon SageMaker for scalable inference
- Real-time validation through AWS Lambda functions
- Immediate feedback system for learners

## AWS Service Integrations

### Amazon Bedrock
- Powers natural language understanding
- Processes semantic queries for dictionary lookups
- Enhances search accuracy and relevance

### Amazon SageMaker
- Hosts the computer vision model
- Processes hand sign validation
- Enables real-time inference

### AWS Lambda
- Handles real-time sign validation requests
- Processes dictionary queries
- Manages communication between services

### Amazon RDS
- PostgreSQL database with pgvector extension
- Stores vector embeddings for efficient similarity search
- Maintains Auslan dictionary data

## Getting Started

### Prerequisites
- AWS Account with appropriate permissions
- AWS CLI installed and configured
- Node.js (v14 or higher)
- PostgreSQL with pgvector extension

### Configuration
1. Set up AWS credentials:
