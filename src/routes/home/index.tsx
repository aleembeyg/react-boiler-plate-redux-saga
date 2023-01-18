import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { selectPosts } from "../../redux/selectors/post/list";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getPostsRequest } from "../../redux/actions/post/list";
import { addPostRequest } from "../../redux/actions/post/add";
import {
  Offcanvas,
  Card,
  Form,
  Button,
  Spinner,
  Toast,
  ToastContainer,
  Modal,
} from "react-bootstrap";
import "./index.css";
import {
  selectAddPost,
  selectAddPostActionStatus,
} from "../../redux/selectors/post/add";
import { APIStatus } from "../../utils/index.utils";
import { deletePostRequest } from "../../redux/actions/post/delete";
import {
  selectDeletePost,
  selectDeletePostActionStatus,
} from "../../redux/selectors/post/delete";

const Home = () => {
  const dispatch = useDispatch();
  const postsData = useSelector(selectPosts);
  const addPostRequestStatus = useSelector(selectAddPostActionStatus);
  const addPost = useSelector(selectAddPost);
  const DeletePostRequestStatus = useSelector(selectDeletePostActionStatus);
  const deletePost = useSelector(selectDeletePost);

  const [showToast, setShowToast] = useState(false);
  const [showToastForDelete, setShowToastForDelete] = useState(false);

  const [posts, setPosts] = useState([]);
  const [showPostPanel, setShowPostPanel] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedMessageID, setSelectedMessageID] = useState();
  const [message, setMessage] = useState("");

  const handleClose = () => setShowPostPanel(false);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  useEffect(() => {
    setPosts(postsData);
  }, [postsData]);

  useEffect(() => {
    if (addPost) {
      setMessage("");
      setShowPostPanel(false);
      setShowToast(true);
      dispatch(getPostsRequest());
    }
  }, [addPost]);
  useEffect(() => {
    if (deletePost) {
      setShowDeleteModal(false);
      setShowToastForDelete(true);
      dispatch(getPostsRequest());
    }
  }, [deletePost]);

  const handleSendMessage = () => {
    if (message.length > 0) {
      dispatch(addPostRequest({ userId: 10, title: "Message", body: message }));
    }
  };

  const handleDeleteMessage = () => {
    dispatch(deletePostRequest(selectedMessageID));
  };

  return (
    <div id="chatContainer">
      <Modal
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete this message?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            style={{ width: "100px" }}
            onClick={() => setShowDeleteModal(false)}
          >
            No
          </Button>
          <Button
            onClick={() => {
              handleDeleteMessage();
            }}
            variant="primary"
            style={{ width: "100px", background: "#284ba5" }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-end">
        <Toast
          show={showToast}
          delay={3000}
          autohide
          bg="success"
          onClose={() => setShowToast(false)}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message App</strong>
          </Toast.Header>
          <Toast.Body>
            Your new post has been submitted successfully!
          </Toast.Body>
        </Toast>
        <Toast
          show={showToastForDelete}
          delay={3000}
          autohide
          bg="success"
          onClose={() => setShowToastForDelete(false)}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Message App</strong>
          </Toast.Header>
          <Toast.Body>Post has been deleted successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
      <h2>Messages</h2>
      {!showPostPanel && (
        <button
          aria-label="Add New Post"
          className="add-btn"
          onClick={() => {
            setShowDeleteModal(false);
            setShowPostPanel(true);
          }}
        ></button>
      )}
      <Offcanvas placement="bottom" onHide={handleClose} show={showPostPanel}>
        <Offcanvas.Body>
          <div style={{ maxWidth: "640px", margin: "auto" }}>
            <Form onSubmit={handleSendMessage}>
              <Form.Label>Message</Form.Label>
              <textarea
                onChange={(e) => setMessage(e.target.value.trim())}
                style={{ resize: "none", fontSize: "14px", height: "80px" }}
                className="form-control"
                id="exampleFormControlTextarea1"
              ></textarea>
              <Button
                style={{
                  display: "block",
                  width: "100%",
                  marginTop: "10px",
                  backgroundColor: "#284ba5",
                }}
                variant="primary"
                onClick={handleSendMessage}
              >
                {addPostRequestStatus === APIStatus.pending && (
                  <Spinner
                    animation="grow"
                    style={{ height: "20px", width: "20px" }}
                    variant="info"
                  />
                )}
                {addPostRequestStatus !== APIStatus.pending && "Send"}
              </Button>
            </Form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      {(posts == null || posts?.length === 0) && (
        <div className="not-found-panel">
          <img
            style={{ width: "150px" }}
            src="https://aaspeech.com/wp-content/uploads/2018/04/speech-Bubbles.jpg"
            alt="Lst Start Chat"
          />
          Lets Start Message Now
        </div>
      )}
      {posts &&
        posts.map((item: any, index) => (
          <Card key={index}>
            <div
              style={{
                display: "flex",
                justifyItems: "flex-end",
                alignItems: "center",
                position: "absolute",
                bottom: "0",
                fontSize: "12px",
                padding: "5px 10px",
                color: "#284ba5",
                width: "100%",
                justifyContent: "end",
              }}
            >
              <button
                aria-label="Delete message"
                className="action-btn"
                onClick={() => {
                  setSelectedMessageID(item.id);
                  setShowDeleteModal(true);
                }}
              >
                Delete
              </button>
            </div>
            <Card.Subtitle className="mb-2 p-2">{item.title}</Card.Subtitle>
            <Card.Body style={{ marginBottom: "10px" }}>{item.body}</Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Home;
