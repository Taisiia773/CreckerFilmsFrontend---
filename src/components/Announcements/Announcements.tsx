import "./Announcements.css";

interface IAnnouncementDataLeft {
    id: number;
    title: string;
    description: string;
    image2: string;
    author: string;
}

export function AnnouncementLeft(){
    const announcements: IAnnouncementDataLeft[] = [
        {
            id: 1,
            title: "Minecraft movie",
            description: "Боевик, Приключение, Юные",
            image2: "https://kinopoisk-ru.clstorage.net/1A5Z8J147/5b0910dtRhP/4oCkzCO2PNofJZ1-Ro53unbIEuxqjrLQHYAS6VPJcWgLVzix_NVYNWnHmHDG5XfVH2bO3iwLuRRBAviPWqZOWTfRpYj0M6vbWqVbaFHPoypkH4W8LZrgQdrW1r_FWX1lh92jfHRZk73wWEmg1qDhAsg23Mm4G2_HRUdkFN5oUoIhwCdA4m36UF5_GbNABPPwpsrSpfsCcJhKidtjmEA_Yo5b4TG83ZS_MVjMoBi3ooKGsJvBOhYrWQjDKNPF4hIDqUjnA6Xt99-f_JOwSY6_eW9NHyG5jbYWAMHSJ5wF8uGN1-g5ttHY_rxVSCjRv2OGiHieRn9UrVGKSC4RxyfTh2qFYEKr7LMVXX3dP0CCd71sCp0hPEW7FMiGlO_ViP_njpfv8n2e3f77E0_uVzjnC8X5WcawXK_YiQ_jXYjqVEQoDOGMb6j_UJOynjxOT704qADSpTJFdhkHyxXmXYR46USQZrqyVNq-dhjJ75eyagTNv90Be5NhnUEOr9cG41uDpwDqhGonthERtF12g0_192hJHqv6w_feDQ7aZpuO9ycLVmO9uZgRsrgXTm1R8uKKRj8Wi3FS65hKCq2axiJdyOdJpwSn739S2TWY9UdEdT5lh1hsesewGcYPWqqVxzDhzlauNjzWX_121cBnm_1iioNxFIKw2yneAI6nU4SuFYLkyOXB5m08GRF92TVPTP047AjRbfNBMNwAwFssU0z0psSTb_jyFdfw8ZsG7JA3a4TK_9bAsh2uXQIJ7xpAIFqA4wHuy6wuMdiXeJd_ho87fShKmqD9CnaQjYzY5pPNsCuMmeu1u9wQODrSyK4Z86mBxTxUST5R5xBKSKHYT69cDupBJASrp_WXmPra9Y5Ov38nSpMo9AI1FkzE2mcZSXSsSREgdrRfmbe5GU3lWbnphgG_0kh-0eNRCgpikgxgUkdhRCUJ46j9kR27k_hMzH10qYaXpTOMOFxKA9WkU8R2aYWQZrozHhi5tB2JIBF4b4RAPxUEMFWplIBAbxBFIt6K4w3oxSNketHSuBJ9D4Z-MeAK1uRxBznfxwhZJ9xAMWBGHO69s1WTcLBYjCMReenLwTFVQzqXJdqJB6CRAidaSu7B6Yri5vmW2vdY9o9N9rruApBpM0Ky3YiB2SHYiLHvzh9psvJTlDSy3oYuUfqmQor7UEM_XSOViUCuX8Io0g6hxuTIbKa52tY0G7uLSfj25gtfILfCMlNFR9um08zxbwYboz32XpU3d5bK7dm5YQVP_d6KuVxumEJIaNdL4JYDpEnnhisr9RWVvtvzxcJ0-C6OUmR3S7-WhoARqNpL-y4BlCn-MttUODGXjeRbuSXDgvbbQDaWqJWNTq4aAuwYz6IBoUWqYDLdUjQTdMMFvf5vyl8jecu6n8BCmO9WB7vqhBRo8bIXEvG2H86vET8mQYt8nUC0HGGciIaqHUUs3YavAWEGpmg7FxJ2VzOMTnJ-6UdTYnKKf9NHT52uXI447srYYHH6VJ-9-pMO611x44SJOxQEf5Rpn8NErd4CJdlO7E-tga_ndZZV_xf6zIfwcC6B12R9yjtbiEbWJFMLOCLJGef6MtYQdTRXT2WXeSaJQn1QCDZc7FEPweKZReqbQu8PYMwhJnrQUfxWNksJ-_brAN_hvQc6FsvIG2mQy_duiR5jMv6QkTE6kkhgnzoizUZ_mEL-1uWVw0vo2QAo2gbkjCfII6Tz2Z77VbNOBz917EnWpz2FsR7OCBziHYAz64KZanF9mdR-f1LB5Fb6qsXLNNvDe5snGYuIa1YI45BDb0vmA2ans1EZ_lOzzY58_6gF0aI1BjtRi8PTJpyIseECViM6Md1UvPyaTOzWOqdAy_-ej_BWLJjCyqNWQ2SagOdEZYtnLH5R2v2XP4DGM7mti9PvOAb-Gc1IXSMcCLsjCxDuMXQXV72-EshllzYihEA-kY8xXa1URcAl3kOsEoLnh-iEYuF0k5tz3jSECT937w4faTqNfpzNSl0jFAxw7otc7Xb925w-M1mBY10-742A_JGP9NwmlkgCYFbI6hEOIcfgRCRv-ZheNl_7C0Y0tO0C0S80C_2XTgdRrpSFOWLKnus2858UNvqfBendfi4DjzQTRDHb4NCJSOeWhiqajCcJKAFk6LYRXfSTdIGP93AujtjgPMfyWQLBkGSUB7kqhxwlsbxZE7d6mATkmX5myQA5UIh5VOyVCMKi0Qcq0E_riOXCpuC2Elg4X7IISrW5rk-SY_3E-9iDxpqiW4N4oc9TYrU7GFo_8F8Modowo0BAMBFJuhLln8SHYlrN5xxJKocihO-p9Bhful2yRIq_9CwOV-izg_0UDcEZ6VOJMW7F16Gx_pYVt7hRyeWdd2gDhTmSCL6RJZiFiamSBurWj2jJr4oqoDtR1XgadAcGM7Whjh4rvw77Ec6P2G-QiDQghV0oenRbmjW8lg4gn_JjSwE1kwK5FaEfRAevm8sqWceky65Dby-2HpZ8W7oOSfL1Lk8f7_KLv9yPQVaoUYwzK8MWqzI63ll6sVCFJdM3IEHJ_xQC8N8rkcCPIRtIaxnG5k8nCCMgvlbTvNf3wYz2v2aIkSx6gzkRB4kepNEJdOvLHaJxPR6Xf_QaiCYZ8G9NjfVVhnQd7BDDAyfSwyLYwShEZ8nrKLEZFzSS8o6DP7Hgwdmqcstx3AVPXC7ZjjZgzF-hNbkVkzh-X4duWPfnzs3wXcC2FmaaQYbqUgJs3IYpRmCCYef0WNH03v-GRXdyK0vaYzELMRZIQpksU8F6IYvQKD_1HV_185XErxY6Z8rJ-JCDMx9p1UkAr1fHK9aDr4ClAWMst1ObNJL7Dc__sCBGGGD5BvcYBEkQa5tOOurGHyLzPlyfub-WT2XV96IJTjuSifffJVBJgCNRgi2cBm5A5cXv6fpSVfaav4GMcjWhB1coNY15EAJDkaJczntswZBiMX2enLF-3o3uHj3qTAo0nQExmmSUgM",
            author: "Mojang"
        },
    ];

    return (
        <div className="announcement-content-image-div">
            {/* <div className="announcement-left"> */}
                {/* <img src="https://i.imgur.com/2l24qP0_d.webp?maxwidth=1520&fidelity=grand" className="announcement-image1"/> */}
                {announcements.map(announcement => (
                    <div key={announcement.id} className="announcements-left">
                        <img src={announcement.image2} alt={announcement.title} className="announcement-image2"/>
                        <div className="announcement-content-left">
                            <h3 className="announcement-title-left">{announcement.title}</h3>
                            <p className="announcement-description">{announcement.description}</p>
                            <p className="announcement-author">{announcement.author}</p>
                        </div>
                    </div>
                ))}
        </div>
    )
}