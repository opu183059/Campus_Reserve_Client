import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Authcontext } from "../../provider/Authprovider";
import Swal from "sweetalert2";

const AdmissionSelect = () => {
  const collegedata = useLoaderData();
  const { user } = useContext(Authcontext);
  const { _id, college_name, address, college_image } = collegedata || {};
  const navigate = useNavigate();

  const AdmissionBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const subject = form.subject.value;
    const dateOfBirth = form.dateOfBirth.value;
    const address = form.address.value;
    const photoUrl = form.photoUrl.value;
    const bookAdmissionData = {
      name,
      email,
      mobile,
      subject,
      dateOfBirth,
      address,
      photoUrl,
      collegeID: _id,
      collegeName: college_name,
      college_image,
      collegeAddress: collegedata.address,
    };
    console.log(bookAdmissionData);
    fetch("http://localhost:5000/bookAdmission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookAdmissionData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "Admission Booked",
            text: "You have successfully booked the college",
          });
        }
        navigate("/admission");
      });
  };
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="uppercase text-sm md:text-base mb-2">
          Book Admission in
        </h1>
        <h1 className="font-semibold text-xl md:text-4xl text-sky-800">
          {college_name}
        </h1>
        <p className="font-semibold text-sm md:text-base">{address}</p>

        <div className="text-left w-11/12 md:w-10/12 mx-auto mt-5">
          <form
            onSubmit={AdmissionBook}
            action=""
            noValidate=""
            className="flex flex-col mx-auto space-y-12 bg-sky-950 rounded-md text-gray-50"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
              <div className="grid grid-cols-6 gap-4 col-span-full">
                <div className="col-span-full">
                  <label htmlFor="uniName" className="text-sm text-gray-50">
                    University Name
                  </label>
                  <input
                    readOnly
                    defaultValue={college_name}
                    id="uniName"
                    name="uniName"
                    type="text"
                    className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="firstname" className="text-sm text-gray-50">
                    Candidate Name
                  </label>
                  <input
                    defaultValue={user?.displayName}
                    id="name"
                    name="name"
                    type="text"
                    className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="mobile" className="text-sm text-gray-50">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="number"
                    placeholder="01545454454"
                    className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm text-gray-50">
                    Email
                  </label>
                  <input
                    readOnly
                    defaultValue={user?.email}
                    id="email"
                    name="email"
                    type="email"
                    className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="subject" className="text-sm text-gray-50">
                    Subject
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    className="w-full h-9 ps-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  >
                    <option value="Science">Science</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Arts">Arts</option>
                    <option value="Medical">Medical</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="dateOfBirth" className="text-sm text-gray-50">
                    Date of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    className="w-full h-9 px-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm text-gray-50">
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="photoUrl" className="text-sm text-gray-50">
                    Photo URL
                  </label>
                  <input
                    id="photoUrl"
                    name="photoUrl"
                    placeholder="Photo URL"
                    type="text"
                    className="h-9 ps-3 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full w-full text-left mt-3">
                  <input
                    type="submit"
                    value="Book Admission"
                    className="px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded uppercase text-gray-50"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSelect;
