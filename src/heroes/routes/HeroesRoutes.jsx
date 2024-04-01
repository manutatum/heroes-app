import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../../heroes'
import { LoginPage } from '../../auth'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />

                    <Route path="login" element={<LoginPage />} />
                    <Route path="/" element={<Navigate to='/marvel' />} />
                </Routes>
            </div>
        </>
    )
}
