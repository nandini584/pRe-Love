const HomePage=()=>{
    return(
        <>
        <div className="flex border-2">
            <div className="flex align-middle w-[50%] h-[400px] bg1 text-white">
                    <div className='font-Fasthand text-[23px]'>
                    hi this is random text

                    </div>
            </div>
            <div background={require('./Images/bg2.jpeg')}  className="flex align-middle w-[50%] bg2">
                <div>
                    hi this is random text

                </div>
            </div>
        </div>
        </>
    )
}
export default HomePage;