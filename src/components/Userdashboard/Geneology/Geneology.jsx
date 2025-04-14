import React, { useState, useEffect } from "react";
import axios from "axios";
import "./geneology.css";
import { useNavigate } from "react-router-dom";
import user from "../../../assets/images/user.png";

const Genealogy = () => {
  const [activeNodes, setActiveNodes] = useState({});
  const [treeData, setTreeData] = useState(null);
  // const[lefttreedata , setlefttreedata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[sponsorid , setsponsorid] = useState('');
  const [currentNodeId, setCurrentNodeId] = useState(sessionStorage.getItem("userid"));
  const navigate = useNavigate(); // Hook to handle navigation
  const userid = sessionStorage.getItem("userid");
  
  const ROOT_URL = import.meta.env.VITE_LOCALHOST_URL;

  const MAX_LEVEL = 4; // Maximum levels to display

  // Fetch tree data for a given nodeId
  //search for sponsorid
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
        // Make API request to search for the sponsor
        console.log(sponsorid);
        const response = await axios.get(`${ROOT_URL}/api/auth/searchUserInGenealogyTree/${sponsorid}`);
       setTreeData(response.data);
       console.log(response);
    } catch (err) {
      
        console.log(err);
    }
};
  //end
  const handleExtremeTop = async () => {
    try {
      const response = await axios.get(`${ROOT_URL}/api/auth/getSponsorChildrens/${userid}`);
      setTreeData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch tree data");
      setLoading(false);
    }
  };
  const handleExtremeleft =async() => {
    try {
      const sponsorId = sessionStorage.getItem("mySponsorId");
      // console.log(sponsorId);
      const response = await axios.post(`${ROOT_URL}/api/auth/extremeLeft`,{sponsorId});
      setTreeData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch tree data");
      setLoading(false);
    }
  };
  const handleExtremeright =async() => {
    try {
      const sponsorId = sessionStorage.getItem("mySponsorId");
      // console.log(sponsorId);
      const response = await axios.post(`${ROOT_URL}/api/auth/extremeRight`,{sponsorId});
      setTreeData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch tree data");
      setLoading(false);
    }
  };

  const fetchTreeData = async (nodeId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${ROOT_URL}/api/auth/getSponsorChildrens/${nodeId}`);
      setTreeData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch tree data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTreeData(currentNodeId);
  }, [currentNodeId]);

  // Handle node click
  const handleNodeClick = (e, nodeId) => {
    e.preventDefault();
    setCurrentNodeId(nodeId);
  };

  // Handle signup for vacant left or right nodes
  const handleSignupClick = (e, formType, parentSponsorId) => {
    e.preventDefault();
    if (formType === "left") {
      navigate(`/userdashboard/signupleft/${parentSponsorId}`);
    } else if (formType === "right") {
      navigate(`/userdashboard/signupright/${parentSponsorId}`);
    }
  };

  // Function to render the tree recursively
  const renderTree = (node, currentLevel = 1, indexPath = "", parentSponsorId = "") => {
    const currentPath = indexPath;
    const isActive = !!activeNodes[currentPath];

    // If it's the maximum level, only render signup or the node, no children
    if (currentLevel === MAX_LEVEL) {
      if (!node) {
        const formType = indexPath.endsWith("-left") ? "left" : "right";
        return (
          <li key={`${indexPath}-empty`} className="empty-node">
            <div className="member-view-box">
              <div className="member-image">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="Empty Node"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div className="member-footer">
                <div className="name">
                  <a href="#"  className="text-decoration-none" onClick={(e) => handleSignupClick(e, formType, parentSponsorId)}>
                    <span>Signup</span>
                    <span style={{ display: "none" }}>{parentSponsorId}</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        );
      }
      return (
        <li key={node._id || currentPath}>
          <a className="text-decoration-none" href="#" onClick={(e) => handleNodeClick(e, node._id)}>
            <div className="member-view-box">
              <div className="member-image">
              {node.isActive === true ?  <img src={user} alt="Member" style={{backgroundColor:"green"}} />
              : <img src={user} alt="Member" style={{backgroundColor:"#c95b51"}} />}
              </div>
              <div className="member-footer">
                <div className="name">
                  <span>{node.value}</span>
                </div>
                <div className="sponsorId">
                  <span>{node.mySponsorId}</span>
                </div>
              </div>
            </div>
          </a>
        </li>
      );
    }

    // If the node is null before level 4, render signup with vacant children
    if (!node) {
      const formType = indexPath.endsWith("-left") ? "left" : "right";
      return (
        <li key={`${indexPath}-empty`} className="empty-node">
          <div className="member-view-box">
            <div className="member-image">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Empty Node"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="member-footer">
              <div className="name">
                <a href="#"  className="text-decoration-none" onClick={(e) => handleSignupClick(e, formType, parentSponsorId)}>
                  <span>Signup</span>
                  <span style={{ display: "none" }}>{parentSponsorId}</span>
                </a>
              </div>
            </div>
          </div>
          <ul>
            {/* Vacant child nodes */}
            <li className="vacant-node">
              <div className="member-view-box">
                <div className="member-footer">
                  <div className="name">Vacant</div>
                </div>
              </div>
            </li>
            <li className="vacant-node">
              <div className="member-view-box">
                <div className="member-footer">
                  <div className="name">Vacant</div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      );
    }

    // If it's a valid node, render the node and its children recursively
    return (
      <li key={node._id || currentPath}>
        <a href="#"  className="text-decoration-none" onClick={(e) => handleNodeClick(e, node._id)}>
          <div className="member-view-box">
            <div className="member-image">
            {node.isActive === true ?  <img src={user} alt="Member" style={{backgroundColor:"green"}} />
            :  <img src={user} alt="Member" style={{ backgroundColor: node.isActive ? "#45c47a" : "#c95b51" }} />}
              {/* <img src={user} alt="Member" /> */}
            </div>
            <div className="member-footer">
              <div className="name">
                <span>{node.value}</span>
              </div>
              <div className="sponsorId">
                <span>{node.mySponsorId}</span>
              </div>
            </div>
          </div>
        </a>
        <ul className={isActive ? "active" : ""}>
          {/* Recursively render left and right children */}
          {renderTree(node.leftChild, currentLevel + 1, `${currentPath}-left`, node.mySponsorId)}
          {renderTree(node.rightChild, currentLevel + 1, `${currentPath}-right`, node.mySponsorId)}
        </ul>
      </li>
    );
  };

  return (
    <>
    <div>
    {/* <form onSubmit={handleSearch}>
    <div className="input-group mb-3 mt-2" style={{maxWidth:"500px"}}>
  <input type="text" className="form-control p-3" placeholder="Search with Sponsor ID..." aria-label="Search" aria-describedby="search-button" onChange={e => setsponsorid(e.target.value)}/>
  <button className="btn btn-primary" type="submit" style={{backgroundColor:"#0071a8"}} id="search-button" value={sponsorid}
                        onChange={(e) => setsponsorid(e.target.value)}>
    <i className="fa fa-search text-white"></i>
  </button>
</div>
</form> */}
    </div>
      <div className="flex flex-column">
      <div className="row">
        <div className="col-lg-4 text-center" >
          <button className="extremeleft mt-5 w-50" onClick={handleExtremeleft}>
            Extreme left
          </button>
        </div>
        <div className="col-lg-4 text-center">
        <button className="extremeleft mt-5 w-50" onClick={handleExtremeTop}>
            Extreme top
          </button>
        </div>
        <div className="col-lg-4 text-center">
        <button className="extremeleft mt-5 w-50" onClick={handleExtremeright}>
            Extreme right
          </button>
        </div>
        </div>

        <div>
          <div className="body genealogy-body genealogy-scroll">
            <div className="genealogy-tree">
              {loading && <p>Loading tree...</p>}
              {error && <p>{error}</p>}
              {treeData && <ul>{renderTree(treeData)}</ul>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genealogy;
