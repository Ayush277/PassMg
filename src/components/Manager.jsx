import React, { useEffect, useState } from "react";

const Manager = () => {
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("Show the password");

  };

  const savePassword = () => {
    const updatedPasswords = [...passwordArray, form];
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
    console.log(updatedPasswords);

    // Reset the form after saving
    setForm({ site: "", username: "", password: "" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[linear-gradient(120deg,#d4fc79_0%,#96e6a1_100%)]"></div>

      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-600">&lt;</span>
          <span>VAULT</span>
          <span className="text-green-600">IFY</span>
          <span className="text-green-600">&gt;</span>
        </h1>
        <p className="text-green-600 text-center">Your EZ Password Manager</p>

        <div className="text-white flex flex-col p-4 gap-8 items-center">
          {/* Input for Site */}
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website URL"
            className="rounded-full border border-green-500 w-full text-black p-4 py-1"
            type="text"
            name="site"
          />

          {/* Input for Username and Password */}
          <div className="flex w-full justify-between gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter Username"
              className="rounded-full border border-green-500 w-full text-black p-4 py-1"
              type="text"
              name="username"
            />

            <div className="relative w-full">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="rounded-full border border-green-500 w-full text-black p-4 py-1"
                type="password"
                name="password"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
                onClick={showPassword}
              >
                Show
              </span>
            </div>
          </div>

          {/* Button to Save Password */}
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-3 bg-green-400 rounded-full px-2 py-2 w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/exymduqj.json"
              trigger="hover"
            ></lord-icon>
            Add password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">your passwords</h2>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md"></table>}
          <table className="table-auto w-full bg-green-100 font-white rounded-md overflow-hidden">
            <thead className="bg-green-200">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item)=>{
                return<tr>
                <td className="py-2 border-black text-center w-32 "><a.hre{item.site}</td>
                <td className="py-2 border-black text-center w-32">{item.username}</td>
                <td className="py-2 border-black text-center w-32">{item.password}</td>
                /* //updatedPasswords.map(( */
              </tr>
              })}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default Manager;
