import UseMemoExample from './UseMemoExample'
//import UseRefExample from './UseRefExample'
import Skeleton from './Skeleton'
import { lazy, Suspense } from 'react'

const UseRefExample = lazy(() => import('./UseRefExample'))


const LazyLoadingExample = () => {
    return (
        <div>
            <UseMemoExample />
            <Suspense fallback={<Skeleton />}>
                <UseRefExample />
            </Suspense>
        </div>
    )
}

export default LazyLoadingExample