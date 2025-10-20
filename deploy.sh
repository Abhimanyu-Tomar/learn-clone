#!/bin/bash

# Deployment Script for Learn-Clone Application
# This script helps you build and deploy your React application

set -e

echo "======================================"
echo "Learn-Clone Deployment Script"
echo "======================================"
echo ""

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    print_info "Installing dependencies..."
    npm install
    print_success "Dependencies installed successfully"
fi

# Menu
echo "Select deployment option:"
echo "1) Build for production (creates build folder)"
echo "2) Build and test locally with serve"
echo "3) Build and deploy with Docker"
echo "4) Build and expose with ngrok (for testing)"
echo "5) Exit"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        print_info "Building production version..."
        npm run build
        print_success "Build completed successfully!"
        print_info "Build files are in the 'build' folder"
        print_info "You can now upload these files to your hosting service"
        ;;
    2)
        print_info "Building production version..."
        npm run build
        print_success "Build completed!"
        
        # Check if serve is installed
        if ! command -v serve &> /dev/null; then
            print_info "Installing serve globally..."
            npm install -g serve
        fi
        
        print_success "Starting local server on port 3000..."
        print_info "Open http://localhost:3000 in your browser"
        print_info "Press Ctrl+C to stop the server"
        serve -s build -l 3000
        ;;
    3)
        if ! command -v docker &> /dev/null; then
            print_error "Docker is not installed. Please install Docker first."
            exit 1
        fi
        
        print_info "Building Docker image..."
        docker build -t learn-clone .
        print_success "Docker image built successfully!"
        
        print_info "Starting Docker container..."
        docker run -d -p 80:80 --name learn-clone-app learn-clone
        print_success "Application is running at http://localhost"
        print_info "To stop: docker stop learn-clone-app"
        print_info "To remove: docker rm learn-clone-app"
        ;;
    4)
        print_info "Building production version..."
        npm run build
        
        # Check if serve is installed
        if ! command -v serve &> /dev/null; then
            print_info "Installing serve globally..."
            npm install -g serve
        fi
        
        # Check if ngrok is installed
        if ! command -v ngrok &> /dev/null; then
            print_error "ngrok is not installed."
            print_info "Download from: https://ngrok.com/download"
            print_info "Or install with: brew install ngrok (on macOS)"
            exit 1
        fi
        
        print_success "Starting local server..."
        serve -s build -l 3000 &
        SERVER_PID=$!
        
        sleep 2
        
        print_success "Exposing to the internet with ngrok..."
        print_info "Public URL will be displayed below:"
        print_info "Press Ctrl+C to stop"
        ngrok http 3000
        
        # Cleanup
        kill $SERVER_PID
        ;;
    5)
        print_info "Exiting..."
        exit 0
        ;;
    *)
        print_error "Invalid choice. Exiting..."
        exit 1
        ;;
esac

echo ""
print_success "Done! Check DEPLOYMENT_GUIDE.md for more deployment options."

