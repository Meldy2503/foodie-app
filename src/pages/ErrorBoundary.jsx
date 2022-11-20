import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            backgroundColor: "#fff",
            height: "100vh",
            width: "100%",
          }}
        >
          <h1
            style={{
              color: "#090909",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            !OOPS&#128543; <br />
            <br /> Something went wrong.
          </h1>{" "}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
