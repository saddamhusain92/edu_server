const { Types } = require("mongoose");
const studentSchema = require("../modals/student");
const studentPaySchema = require("../modals/payment");

exports.studentadd = async (req, res) => {
  try {
    const savedata = new studentSchema({
      name: req.body.name,
      class: req.body.class,
      father: req.body.father,
      mobile: req.body.mobile,
      attend: req.body.attend,
    });

    savedata.save().then((data) => {
      res.status(201);
      res.json({
        status: 201,
        alert: "Congratulations new student has been successfully Admission",
        user: data,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.studenPayment = async (req, res) => {
  try {
    const _id = req.params;
    const savedata = new studentPaySchema({
      name: req.body.name,
      userid: _id,
      payment:[
        {
          month:"July",
          paid:0,
          date:"",
          Types:"non"

        },
        {
          month:"August",
          paid:0,
          date:"",
          Types:"non"

        },
        {
          month:"september",
          paid:0,
          date:"",
          Types:"non"

        },
        {
          month:"October",
          paid:0,
          date:"",
          Types:"non"

        },
        {
          month:"november",
          paid:0,
          date:"",
          Types:"non"

        },
        {
          month:"december",
          paid:0,
          date:"",
          Types:"non"

        },
      ],
    });

    savedata.save().then((data) => {
      res.status(201);
      res.json({
        status: 201,
        alert: "Congratulations new payment has been successfully Admission",
        user: data,
      });
    });
   
  } catch (error) {
    console.log(error);
  }
};
exports.studenAttend = async (req, res) => {
  try {
    const _id = req.params;
    const studentdetails = await studentSchema.findById(_id);
    const attendData = studentdetails.attend;
    Object.assign(studentdetails, { attend: [...attendData, req.body] });
    studentdetails.save();
    res.json({
      status: 201,
      message: "successfull attendance save",
    });
  } catch (error) {
    console.log(error);
  }
};


exports.studentUpdate = async (req, res) => {
  try {
    const _id = req.params;
    const studentdetails = await studentSchema.findById(_id);
    const attendData = studentdetails.attend;
    Object.assign(studentdetails,{
      name: req.body.name,
      class: req.body.class,
      father: req.body.father,
      mobile: req.body.mobile,
      attend:attendData
    });
    studentdetails.save();
    res.json({
      status: 201,
      message: "successfull attendance save",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.studenList = async (req, res) => {
  try {
    const _id = req.params;
    const studentdetails = await studentSchema.find();
    res.json({
      status: 200,
      students: studentdetails,
    });
  } catch (error) {
    console.log(error);
  }
};
