import './Contact.css'

export default function Contact(){
    return(
        <div className='contatos' id='contato'>
            <h2 className='titulo__contato'>Plataformas de Contato</h2>
            <div className='cards'>
            <div className='card__contato'>
                <h4 className='descricao__contato'>Entre em contato para agendar sua consultoria</h4>
                <h2 className='nome__contato'>Karen Lima</h2>
                <a className='anchor' href='https://wa.me/5582988562438'><img className='qrcode' src='./images/kr.png' alt='qr code karen'/></a>
                <a href='https://www.facebook.com/' className='ancora__contato'><img src='./images/fb.png' className='logo__contato' alt='logo facebook'/> Lima Tavares</a>
                <a href='https://www.instagram.com/limaetavares/' className='ancora__contato'><img src='./images/ig.png' className='logo__contato' alt='logo instagram'/> limaetavares</a>
                <a href='mailto://limaetavaresadvocacia@outlook.com' className='ancora__contato'><img src='./images/email.png' className='logo__contato' alt='logo email'/> limaetavaresadvocacia@outlook.com</a>
            </div>
            <div className='card__contato'>
                <h4 className='descricao__contato'>Entre em contato para agendar sua consultoria</h4>
                <h2 className='nome__contato'>Roberto Tavares</h2>
                <a className='anchor' href='https://wa.me/5582999120808'><img className='qrcode' src='./images/rb.png' alt='qr code karen'/></a>
                <a href='https://www.facebook.com/' className='ancora__contato'><img src='./images/fb.png' className='logo__contato' alt='logo facebook'/> Lima Tavares</a>
                <a href='https://www.instagram.com/limaetavares/' className='ancora__contato'><img src='./images/ig.png' className='logo__contato' alt='logo instagram'/> limaetavares</a>
                <a href='mailto://limaetavaresadvocacia@outlook.com' className='ancora__contato'><img src='./images/email.png' className='logo__contato' alt='logo email'/> limaetavaresadvocacia@outlook.com</a>
            </div>
            </div>
            <a href='#inicio' className='ancora__inicio'><div><i className="fa-solid fa-angle-up"></i></div> 
            Voltar para o início</a>
        </div>
    )
}