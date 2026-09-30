module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
}),
"[project]/lib/generateQuotePDF.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateQuotePDF",
    ()=>generateQuotePDF
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quotation.ts [app-ssr] (ecmascript)");
;
;
;
function generateQuotePDF(items, prices, companyInfo) {
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });
    const now = new Date();
    const quoteRef = `SJ-Q-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 9000 + 1000)}`;
    const wastage = prices.settings?.wastageFactor ?? 1.07;
    const plating = prices.settings?.platingCostFactor ?? 0;
    // ── Header ──────────────────────────────────────────────────────────────────
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text(companyInfo.name, 14, 22);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(companyInfo.address, 14, 29);
    doc.text(`${companyInfo.email}  |  ${companyInfo.phone}`, 14, 34);
    if (companyInfo.gst) doc.text(`GST: ${companyInfo.gst}`, 14, 38.5);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('QUOTATION', 150, 22);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`Ref: ${quoteRef}`, 150, 29);
    doc.text(`Date: ${now.toLocaleDateString('en-US')}`, 150, 34);
    doc.setLineWidth(0.5);
    doc.line(14, 42, 196, 42);
    // ── Product table (all prices in USD) ────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: 48,
        head: [
            [
                '#',
                'Product',
                'SKU',
                'Metal · Karat',
                'Primary Stone',
                'Secondary Stone',
                'Wt (g)',
                'Qty',
                'Unit (USD)',
                'Total (USD)'
            ]
        ],
        body: items.map((item, i)=>{
            const bd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getItemBreakdown"])(item, prices);
            const unitUSD = bd.P;
            const totalUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateItemPrice"])(item, prices);
            const metal = item.product.baseMetal ?? 'silver';
            const stone1 = item.selectedStone && item.selectedStone !== 'None' ? `${bd.N1}× ${item.selectedStone}` : '—';
            const stone2 = item.selectedSecondaryStone && item.selectedSecondaryStone !== 'None' ? `${bd.N2}× ${item.selectedSecondaryStone}` : '—';
            const weight = item.product.weightGrams?.toFixed(2) ?? '—';
            return [
                i + 1,
                item.product.name,
                item.product.sku ?? '—',
                `${metal.charAt(0).toUpperCase() + metal.slice(1)} ${item.selectedKarat}`,
                stone1,
                stone2,
                weight,
                item.quantity,
                `$${unitUSD.toFixed(2)}`,
                `$${totalUSD.toFixed(2)}`
            ];
        }),
        foot: [
            [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                'TOTAL',
                '',
                `$${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quotation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateQuoteTotal"])(items, prices).toFixed(2)}`
            ]
        ],
        headStyles: {
            fillColor: [
                201,
                146,
                42
            ],
            textColor: [
                17,
                16,
                16
            ],
            fontStyle: 'bold'
        },
        footStyles: {
            fillColor: [
                249,
                246,
                239
            ],
            textColor: [
                44,
                42,
                39
            ],
            fontStyle: 'bold'
        },
        styles: {
            fontSize: 8,
            cellPadding: 2.5
        }
    });
    const finalY = doc.lastAutoTable.finalY + 8;
    // ── Pricing formula footnote ────────────────────────────────────────────────
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'italic');
    doc.text(`Pricing formula: P = w×m×${wastage} + N1×(s1+st1) + N2×(s2+st2) + L×w + ${plating}×w×m`, 14, finalY);
    doc.text('w = Weight (g)  |  m = Metal spot USD/g (karat-adjusted)  |  N1/N2 = Primary/Secondary gemstone count', 14, finalY + 4.5);
    doc.text('s = Stone cost (USD/piece)  |  st = Satin/setting cost (USD/piece)  |  L = Labour (USD/g)', 14, finalY + 9);
    doc.text(`All prices in USD  |  Metal prices as of ${now.toLocaleString('en-US')}`, 14, finalY + 13.5);
    doc.text('This is an indicative quotation only. Final prices subject to written confirmation from Sachi Jewellery Co.', 14, finalY + 18);
    doc.save(`Sachi_Quote_${quoteRef}.pdf`);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0xkmcgy._.js.map