export default function SectionHeader({ children, sectionName }) {
    return (
        <div>
            <h3>{sectionName}</h3>
            {children}
        </div>
    )
}