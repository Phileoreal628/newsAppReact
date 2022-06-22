import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <>
                <div className="w-1/5 mx-auto overflow-hidden bg-white rounded-lg shadow-lg my-6">
                <img className="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80" alt="NIKE AIR" />

                    <div className="px-4 py-2">
                        <h1 className="text-3xl font-bold text-gray-800 uppercase">NIKE AIR</h1>
                        <p className="mt-1 text-sm text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
                    </div>

                        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                            <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Read More</button>
                        </div>
                    
                        
                </div>
            </>
        )
    }
}
