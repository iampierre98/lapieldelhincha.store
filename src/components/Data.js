import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import "../App.css";

const Data = ({ fetchData, data, loading, error }) => {
    useEffect(() => {
        fetchData();
    }, [fetchData]
        );

    if (loading) {
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <section>
            {data.map(item => (
                <div>Hola,</div>
            ))}  
        </section>
    );
}

const mapStateToProps = state => ({
    data: state.data,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps, { fetchData })(Data);