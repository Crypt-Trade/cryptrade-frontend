import React, { useState } from "react";
import "./geneology.css";
import { useNavigate } from "react-router-dom";
import user from "../../../assets/images/user.png";

const Genealogy = () => {
  const [currentNodeId, setCurrentNodeId] = useState("1");
  const navigate = useNavigate();

  // Hardcoded tree structure
  const mockTreeData = {
    _id: "1",
    value: "Root Node",
    mySponsorId: "SP001",
    isActive: true,
    leftChild: {
      _id: "2",
      value: "Left Node",
      mySponsorId: "SP002",
      isActive: true,
      leftChild: {
        _id: "4",
        value: "Left-Left Node",
        mySponsorId: "SP004",
        isActive: false,
      },
      rightChild: {
        _id: "5",
        value: "Left-Right Node",
        mySponsorId: "SP005",
        isActive: true,
      },
    },
    rightChild: {
      _id: "3",
      value: "Right Node",
      mySponsorId: "SP003",
      isActive: false,
      leftChild: {
        _id: "6",
        value: "Right-Left Node",
        mySponsorId: "SP006",
        isActive: true,
      },
      rightChild: null, // Vacant spot
    },
  };

  const handleNodeClick = (e, nodeId) => {
    e.preventDefault();
    setCurrentNodeId(nodeId);
  };

  const handleSignupClick = (e, formType, parentSponsorId) => {
    e.preventDefault();
    navigate(`/signup/${formType}/${parentSponsorId}`);
  };

  const renderTree = (node, indexPath = "") => {
    if (!node) {
      return (
        <li key={`${indexPath}-empty`} className="empty-node">
          <div className="member-view-box">
            <div className="member-image">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Vacant" />
            </div>
            <div className="member-footer">
              <div className="name">
                <a href="#" className="text-decoration-none" onClick={(e) => handleSignupClick(e, "left", indexPath)}>
                  <span>Signup</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      );
    }

    return (
      <li key={node._id}>
        {/* <a href="#" onClick={(e) => handleNodeClick(e, node._id)}> */}
          <div className="member-view-box">
            <div className="member-image">
              <img src={user} alt="Member" style={{ backgroundColor: node.isActive ? "#45c47a" : "#c95b51" }} />
            </div>
            <div className="member-footer">
              <div className="name">{node.value}</div>
              <div className="sponsorId">{node.mySponsorId}</div>
            </div>
          </div>
        {/* </a> */}
        <ul>
          {renderTree(node.leftChild, `${indexPath}-left`)}
          {renderTree(node.rightChild, `${indexPath}-right`)}
        </ul>
      </li>
    );
  };

  return (
    <>
    <div>
    <form >
    <div className="input-group mb-3 mt-2" style={{maxWidth:"500px"}}>
  <input type="text" className="form-control p-3" placeholder="Search with user ID..." aria-label="Search" aria-describedby="search-button" />
  <button className="btn btn-primary" type="submit" style={{backgroundColor:"#2F4F4F"}} id="search-button" 
    >
    <i className="fa fa-search text-white"></i>
  </button>
</div>
</form>
    </div>
    <div className="d-flex text-center">
    <div className="container">
    <div className="genealogy-container">
      <div className="genealogy-tree">
        <ul>{renderTree(mockTreeData)}</ul>
      </div>
    </div>
    </div>
    </div>
        
    </>
    
  );
};

export default Genealogy;
