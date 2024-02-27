import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { api } from "../services/axiosInstance";

export default function SpendLimit() {
  const [limit, setLimit] = useState([]);

  useEffect(() => {
    fetchLimit();
  }, []);

  async function fetchLimit() {
    try {
      const { data } = await api.get("/limit");

      setLimit(data);
    } catch (error) {
      console.error(error);
    }
  }

  function onLimitChange(e, roleId) {
    setLimit((prev) => {
      return prev.map((data) => {
        if (data.role.id === roleId) {
          return { ...data, limit: +e.target.value };
        }
        return { ...data };
      });
    });
  }

  async function updateLimit(roleId) {
    const list = limit.filter((data) => data.role.id === roleId);
    try {
      await api.put("/limit", {
        limit: list[0].limit,
        roleId: roleId,
      });

      alert("Spend limit updated");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className="p-9 rounded-2xl shadow-md bg-white w-[35rem]">
        <table className="border w-full">
          <thead>
            <tr className="border">
              <th className="border px-2 py-3">No</th>
              <th className="border px-2 py-3">Role</th>
              <th className="border px-2 py-3">Limit Spend (RM)</th>
              <th className="border px-2 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {limit?.map((data, i) => {
              return (
                <tr key={data.id} className="border">
                  <td className="border px-2 py-3 text-center">{i + 1}</td>
                  <td className="border px-2 py-3 text-center">
                    {data.role.name}
                  </td>
                  <td className="border px-2 py-3 text-center">
                    <input
                      type="number"
                      name="limit"
                      id="limit"
                      placeholder="RM"
                      className="outline-none"
                      value={data.limit}
                      onChange={(e) => onLimitChange(e, data.role.id)}
                    />
                  </td>
                  <td className="border px-2 py-3 text-center">
                    <button
                      type="submit"
                      className="font-medium"
                      onClick={() => updateLimit(data.role.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
