import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { date: '2024-01', value: 65 },
  { date: '2024-02', value: 75 },
  { date: '2024-03', value: 85 },
  { date: '2024-04', value: 70 },
  { date: '2024-05', value: 90 },
];

const SignalChart = () => {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-4">Historical Performance</h4>
      <div className="h-[200px] w-full rounded-lg px-2 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SignalChart;
