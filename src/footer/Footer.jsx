import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
        <div className="footer">
            <h1>ご連絡、ご相談お待ちしております。</h1>
            <button className='button' >お問合せ</button>
            <a className='callTel' href="tel:03-3401-8901"> 03-3401-8901 </a>
            <p>グローバルソリューション事業部</p>
            <p>株式会社リンクスタッフ</p>
            <p> 東京都港区赤坂赤坂第一ビル 5F </p>
            <p>グローバルソリューション事業部 </p>
            <p className='tel'>TEL :03-3401-8901</p>

            <a href="https://www.linkstaff.co.jp/" className="footer_img"> 
            </a>
            
            <p>© 1996–2023 Linkstaff Co.,Ltd. All rights reserved.</p>

        </div>
    );
}




export default Footer;