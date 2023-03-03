import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80" alt="" />
                <Link className='link' to="/products/1">
                <button>
                    Sale
                </button>
                </Link>
            </div>
            <div className="row">
            <img src="https://images.pexels.com/photos/2825599/pexels-photo-2825599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <Link className='link' to="/products/1">
                <button>
                    Sale
                </button>
                </Link>
            </div>
        </div>

        <div className="col">
            <div className="row">
            <img src="https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <Link className='link' to="/products/1">
                <button>
                    Sale
                </button>
                </Link>
            </div>
        </div>

        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <Link className='link' to="/products/1">
                <button>
                    Sale
                </button>
                </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.unsplash.com/photo-1511511450040-677116ff389e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />
                <Link className='link' to="/products/1">
                <button>
                    Sale
                </button>
                </Link>
                    </div>
                </div>
            </div>

            <div className="row">
            <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" />
                <Link className='link' to="/products/1">
                <button>
                    Sale
                </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Categories