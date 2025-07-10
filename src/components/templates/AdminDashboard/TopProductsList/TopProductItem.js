import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
export default function TopProductItem(Props) {

    return (
        <div className="flex flex-col 2xs:flex-row 2xs:items-center justify-between gap-3 border border-black/20 rounded-lg p-2 2xs:px-2 2xs:py-0">
            {/* right */}
            <Link href={"#"} className="flex items-center gap-2 2xs:gap-1">
                <img className="size-22 2xs:size-20 border border-black/20 2xs:border-none rounded-md" src={Props.image} alt="p-1" />
                <p className="text-sm md:text-xs lg:text-sm mb-1 font-danaBold line-clamp-3">{Props.title}</p>
            </Link>
            {/* center */}
            <div className="mt-2 2xs:mt-0">
                <p className="text-sm flex gap-1 flex-col"> {Props.sale} <span>فروش</span></p>
            </div>
            {/* left */}
            <div className="2xs:w-40 h-full">
                <ResponsiveContainer >
                    <LineChart
                        data={Props.data}
                    >
                        <Tooltip />
                        <Line yAxisId="right" type="monotone" dataKey={"فروش"} stroke={"#000"} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}