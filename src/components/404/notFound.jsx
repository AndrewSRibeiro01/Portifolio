import imagemNotFound from "../assets/img/notFound404.png"

export const NotFound404 = () => {
    return (<>
        <div style={{ color: "white", margin: "0 auto" }}>
            <img style={{ margin: "250px 0 250px 0" }} src={imagemNotFound} />
            <p style={{ color: "white" }}>Página em construção</p>
        </div>
    </>
    )
}