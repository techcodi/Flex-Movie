import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", justifyContents: "center", marginTop: "3rem" }}
    >
      <div>
        <h1>Error Kindly go back</h1>
        <button onClick={() => navigate(-2)}>Go back </button>
      </div>
    </div>
  );
}

export default PageNotFound;
