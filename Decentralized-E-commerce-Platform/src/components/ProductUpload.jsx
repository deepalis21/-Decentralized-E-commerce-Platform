import React, { useState, useContext } from "react";
import { create } from "ipfs-http-client";
import { ProductContext } from "./ProductContext";
const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: `Basic ${btoa("PROJECT_ID:PROJECT_SECRET")}`,
    },
  });

const ProductUpload = () => {
  const { addProduct } = useContext(ProductContext);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "Men",
  });
  const [ipfsHash, setIpfsHash] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError(""); // Clear any previous error
    try {
      const added = await client.add(file);
      setIpfsHash(added.path);
      setIsUploading(false);
    } catch (error) {
      setIsUploading(false);
      setUploadError("Failed to upload image. Please try again.");
      console.error("Error uploading file: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.description || !product.price) {
      alert("Please fill in all the product details.");
      return;
    }
    if (!ipfsHash) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      const metadata = { ...product, image: ipfsHash };
      addProduct(metadata);
      alert("Product uploaded successfully!");
      // Reset form and states
      setProduct({ name: "", description: "", price: "", category: "Men" });
      setIpfsHash("");
    } catch (error) {
      console.error("Error submitting product: ", error);
      alert("Failed to upload product. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow mt-24">
      <h1 className="text-xl font-bold mb-6 text-center">Upload Product</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <select
          value={product.category}
          onChange={(e) =>
            setProduct({ ...product, category: e.target.value })
          }
          className="w-full p-2 mb-4 border rounded bg-white"
        >
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
        <input
          type="file"
          onChange={handleImageUpload}
          className="w-full mb-4"
        />
        {isUploading && (
          <p className="text-sm text-blue-500">Uploading image...</p>
        )}
        {uploadError && (
          <p className="text-sm text-red-500">{uploadError}</p>
        )}
        {ipfsHash && (
          <div className="mt-4">
            <p className="text-sm text-green-500">Image uploaded successfully!</p>
            <img
              src={`https://ipfs.infura.io/ipfs/${ipfsHash}`}
              alt="Uploaded"
              className="w-32 h-32 object-cover mt-2 border rounded"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;
