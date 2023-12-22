import React from "react";

function ComparisonTable() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full w-full table-auto border-collapse border border-gray-200 text-base">
        <thead>
          <tr className="bg-gray-100 rounded">
            <th className="border border-gray-300 md:px-4 px-2 py-2 text-white bg-black font-bold">
              Feature
            </th>
            <th className="border border-gray-300 md:px-4 px-2 py-2 text-white bg-black font-bold">
              Ricoh Theta SC2
            </th>
            <th className="border border-gray-300 md:px-4 px-2 py-2 text-white bg-black font-bold">
              Insta360 One X2
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Photo Quality
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">Good</td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">Good</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Video Quality
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              No stabilization
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Better (with stabilization)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Image Resolution
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">14 MP</td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">18 MP</td>
          </tr>
          <tr>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Image Format
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">JPEG</td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              RAW and JPEG
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Indoor Performance
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Excellent
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">Good</td>
          </tr>
          <tr>
            <td className="border border-gray-300 md:px-4 px-2 py-2">
              Memory Card Slot
            </td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">No</td>
            <td className="border border-gray-300 md:px-4 px-2 py-2">Yes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparisonTable;
