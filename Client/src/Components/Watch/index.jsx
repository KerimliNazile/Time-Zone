import React from 'react'
import './index.scss'
const Watch = () => {
    return (
        <>

            <section id='Watch'>
                <div className="WatchArea">
                    <div className="WatchLeft">
                        <div className="TextImg">
                            <h1>Watch of Choice</h1>
                            <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                            <button>Show Watches</button>
                        </div>
                    </div>
                    <div className="WatchRight">
                        <div className="WatchImgg">
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/choce_watch1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Watch