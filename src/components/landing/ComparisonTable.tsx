import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

interface ComparisonTableProps {
	label?: string;
	title: string;
	subtitle?: string;
	headers: string[];
	rows: {
		feature: string;
		values: readonly CellValue[];
	}[];
	footnote?: string;
}

function CellContent({ value }: { value: CellValue }) {
	if (value === "yes") {
		return <Check className="w-5 h-5 text-[#EA7AF4] mx-auto" />;
	}
	if (value === "no") {
		return <X className="w-5 h-5 text-white/30 mx-auto" />;
	}
	if (value === "partial") {
		return <Minus className="w-5 h-5 text-white/50 mx-auto" />;
	}
	return <span className="text-sm">{value}</span>;
}

export function ComparisonTable({
	label = "Comparison",
	title,
	subtitle,
	headers,
	rows,
	footnote,
}: ComparisonTableProps) {
	return (
		<section className="w-full bg-background py-20 lg:py-32">
			<div className="container mx-auto px-4 md:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-16 space-y-6">
					<div className="text-sm">[ {label} ]</div>
					<h2>{title}</h2>
					{subtitle && <p className="text-lg max-w-3xl font-satoshi">{subtitle}</p>}
				</div>

				{/* Table */}
				<div className="overflow-x-auto">
					<table className="w-full text-left">
						<thead>
							<tr className="border-b border-white/10">
								<th className="py-4 px-4 text-sm font-bold text-white min-w-[160px]" />
								{headers.map((header) => (
									<th key={header} className="py-4 px-4 text-sm font-bold text-white text-center min-w-[120px]">
										{header}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((row, i) => (
								<tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/5" : ""}`}>
									<td className="py-4 px-4 text-sm font-medium text-white">{row.feature}</td>
									{row.values.map((value, j) => (
										<td key={`${row.feature}-${headers[j]}`} className="py-4 px-4 text-center">
											<CellContent value={value} />
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Footnote */}
				{footnote && <p className="text-sm font-satoshi mt-8 max-w-4xl">{footnote}</p>}
			</div>
		</section>
	);
}
