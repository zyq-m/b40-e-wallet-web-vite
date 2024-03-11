import { getStudentData } from "../../api/auth";
import { useState, useEffect } from "react";
import StudentList from "../../components/StudentList";

export default function Ekupon() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch cafe data when the component mounts
    fetchDataStudent();
  }, []);

  const fetchDataStudent = async () => {
    try {
      const response = await getStudentData("ekupon");
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StudentList
      title="Ekupon Student"
      students={students}
      fetchData={fetchDataStudent}
    />
  );
}
