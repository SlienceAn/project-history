
export default function TextContent({ content }: any) {
    return (
        <div className="box" style={content ? { transform: 'rotateY(180deg)' } : {}}>
            <div className="text-front">
                <span>front</span>
            </div>
            <div className="text-back">
                <span>back</span>
            </div>
        </div>
    )
}