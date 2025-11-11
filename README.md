# LiveChat Application

A real-time chat application built with Spring Boot and WebSocket that allows users to communicate in real-time.

## Features

- Real-time messaging using WebSocket
- Simple and intuitive user interface
- Username-based chat
- Responsive design

## Prerequisites

- Java 21 or later
- Maven 3.6.3 or later
- Node.js (for frontend development, optional)

## Technologies Used

### Backend
- Spring Boot 3.5.7
- Spring WebSocket
- STOMP Protocol
- Maven

### Frontend
- HTML5
- Vanilla JavaScript (ES6+)
- STOMP.js 7.0.0 for WebSocket communication
- Bootstrap 3.3.7 for styling

## Getting Started

### Running the Application

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd livechatms
   ```

2. Build the application:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## Project Structure

```
src/
├── main/
│   ├── java/com/rodrigo134/livechatms/
│   │   ├── config/         # Configuration classes
│   │   ├── controller/     # Web controllers
│   │   ├── domain/         # Domain models
│   │   └── LivechatmsApplication.java  # Main application class
│   └── resources/
│       └── static/         # Frontend resources (HTML, CSS, JS)
└── test/                   # Test files
```

## WebSocket Configuration

The application uses STOMP over WebSocket for real-time communication:
- WebSocket endpoint: `/ws`
- Message broker prefix: `/topic`
- Application destination prefix: `/app`

## API Endpoints

### WebSocket Endpoints
- `GET /ws` - WebSocket connection endpoint
- `/app/chat.sendMessage` - Send a chat message
- `/topic/public` - Subscribe to receive messages

### REST Endpoints
- `GET /` - Serves the chat interface

## Frontend

The frontend is a single-page application that connects to the WebSocket server. It includes:
- User authentication (username input)
- Real-time message display
- Responsive layout using Bootstrap

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
