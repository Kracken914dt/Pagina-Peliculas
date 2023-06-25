import MyRoutes from './routers/router';


function App() {
    return (
        <div class = 'bg-slate-800'>
            <header class='bg-sky-500 p-6'>
                <h1 class='text-center text-4xl text-blue-100 font-bold'>Peliculas</h1>
            </header>
            <MyRoutes />
        </div>
    );
}

export default App
