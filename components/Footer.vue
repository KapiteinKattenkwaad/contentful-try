<template>
    <div>
        <div class="skewed"></div>
        <footer>
            <div class="footer">
                <h4>Hijswerken Stijn</h4>
            </div>
        </footer>
    </div>
</template>


<style lang="scss">
    .skewed {
        background-color: #efefef;
        height: 30px;
        transform-origin: top right;
        -ms-transform: skew(0, -5deg);
        -webkit-transform: skew(0, -5deg);
        transform: skew(0, -2deg);

    }

    footer {
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        background-color: #efefef;
        text-align: center;
    }
</style>