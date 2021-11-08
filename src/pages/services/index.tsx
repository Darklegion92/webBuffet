import { useRouter } from 'next/router'

const Services = () => {
    const router = useRouter()
    const { category, subcategory } = router.query
    
    return (
        <div>
            {category} {subcategory}
        </div>
    )
}

export default Services
