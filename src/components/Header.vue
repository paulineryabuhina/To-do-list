<template>
  <header className="header">
                <div className='header__content'>
                    <div className="header__navigation">
                      
                        <a className='header__link' href=''>List</a>
                        <a className='header__link' href=''>Calendar</a>
                    </div>
                    <div className="header__left">
                        <button className="header__alert"></button>
                        <button className='header__account'></button>
                    </div>
                </div>
        </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header {
    display: flex;
    flex-direction: column;
    height: 88px;
    max-width: 1200px;
    padding-top: 25px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #EEF2F6;
    &__content{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__logo {
        width: 150px;
        height: 34px;
    }
    &__left {
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;
    }
    &__search {
        background-image: url(./search.png);
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
        border: none;
        color: inherit;
        background-color: transparent;
        width: 20px;
        height: 20px;
    }
    &__cart {
        background-image: url(./cart.png);
        background-size: cover;
        background-repeat: no-repeat;
        cursor: pointer;
        border: none;
        color: inherit;
        background-color: transparent;
        width: 24px;
        height: 24px;
    }
    &__login {
        background-color: #46a358;
        cursor: pointer;
        border: none;
        width: 100px;
        height: 35px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'PT Sans', sans-serif;
        color: #fff;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        &::before {
            background-image: url(./login.png);
            content: '';
            background-size: cover;
            height: 20px;
            width: 20px;
            transition: 0.20s;
        }
        &:hover {
            background-color: #349445;
          }
          
        &:active {
            background-color: #1e7f2f;
            transform: scale(0.95);
            box-shadow: 0 0 5px #46A358;
            ;
            /* Добавление тени при активации */
          }
          
        &:hover::before {
            transform: translateX(-4px);
        }
    }
    &__line {
        width: 1200px;
        border: 0.3px;
        border: 0.3px solid #46a35880;
        background-color: #46a35880;
        margin-top: 20px;
    }
    &__navigation {
        display: flex;
        gap: 30px;
    }
    &__link {
        text-decoration: none;
        font-family: 'PT Sans', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: #3d3d3d;
    }
}
</style>