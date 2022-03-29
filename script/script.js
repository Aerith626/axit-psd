
// Funcionalidad de TABS

function actTabs () {
    document.querySelectorAll('.tabs__btn').forEach(btn => {
        btn.addEventListener('click', ()=> {
            let sideBar = btn.parentElement;
            let tabsContainer = sideBar.parentElement;
            let tabsNum = btn.dataset.btnTab;
            let tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabsNum}"]`);
            sideBar.querySelectorAll('.tabs__btn').forEach(btn => {
                btn.classList.remove('tabs__btn--active');
            });
            tabsContainer.querySelectorAll('.tabs__content').forEach(tab => {
                tab.classList.remove('tabs__content--active');
            });

            btn.classList.add('tabs__btn--active');
            tabToActivate.classList.add("tabs__content--active");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    actTabs ();

    document.querySelectorAll('.tabs').forEach(tabsContainer => {
        tabsContainer.querySelector('.tabs__sidebar .tabs__btn').click();
    });

});