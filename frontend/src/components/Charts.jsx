import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function Charts({ data }) {

  if (!data || data.length === 0) {
    return <p className="text-gray-500">No data available</p>;
  }

  const keys = Object.keys(data[0]);

  const xKey = keys[0];   // first column
  const yKey = keys[1];   // second column

  return (
    <div className="space-y-8">

      {/* Bar Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Bar Chart</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={yKey} fill="#2563eb" />
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Line Chart */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Line Chart</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={yKey} stroke="#2563eb" />
          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}