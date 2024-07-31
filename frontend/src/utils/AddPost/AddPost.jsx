import React from "react";
import "./addPost.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddPost = () => {
  const handleAddPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const inputs = Object.fromEntries(formData);
    console.log(inputs);

  }
  return (
    <div className="addPostWrapper">
      <div className="apLeft">
        <h2>Add new post</h2>
        <form className="apInp" onSubmit={handleAddPost}>
          <input type="text" placeholder="Post title" name="title" />
          <div className="apPAC">
            <input type="text" placeholder="Price" className="apPrice" name="price" />
            <input type="text" placeholder="Address" className="apAddress" name="address" />
            <input type="text" placeholder="City" className="apCity" name="city" />
          </div>
          <div className="apDesc">
            <span>Post Description</span>
            <ReactQuill theme="snow" className="rquill" />
          </div>
          <div className="apPUP">
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="rent" defaultChecked>
                  Rent
                </option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <div className="item saveBtn">
              <button>Save</button>
            </div>
          </div>
        </form>
      </div>
      <div className="apRight">
        <div className="apImg">
          <input type="file" name="" id="" />
        </div>
      </div>
    </div>
  );
};

export default AddPost;
