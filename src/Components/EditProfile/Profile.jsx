import './index.css';
import foto from '../img/volkov.jpg'
// import SelectOptions from '../MultiSelect/MultiSelect';
// import MultipleSelect from '../MultiSelect/MultiSelect';
import AnimatedMulti from '../MultiSelect/MultiSelect';

const EditProfile = () => {
  return (
    <>
      <div className="blockWrapper">
        <div className="editPge">
          <div className="editHeader">
            <h1><span className="yellowSymbols">//</span> Редактировать аккаунт <span className="yellowSymbols">//</span></h1>
          </div>
          <div className="editPhoto">
            <img src={foto} alt="userPhoto" />
            <input className="changePhoto" type="file" />
            <button className="deletePhoto">УДАЛИТЬ ФОТО</button>
          </div>
          <div className="editUserForm">
            <form>
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Группа(ы)/Год обучения</label>
                    <AnimatedMulti />
                  </div>
                </div>

                <div className="row">

                  <div className="col-sm">
                    <label class="form-label labelEditBold">Имя</label>
                    <input type="text" className="form-control editProfileInput" value="Игорь" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Фамилия</label>
                    <input type="text" className="form-control editProfileInput" value="Волков" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Телефон</label>
                    <input type="text" className="form-control editProfileInput" value="+7-963-718-77-33" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Город</label>
                    <input type="text" className="form-control editProfileInput" value="Москва" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Telegram</label>
                    <input type="text" className="form-control editProfileInput" value="@viil_ru" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">GitHub</label>
                    <input type="text" className="form-control editProfileInput" value="gavriil-volkov" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <label class="form-label labelEditBold">LinkedIn</label>
                    <input type="text" className="form-control editProfileInput" value="gavriil-volkov" />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">Instagram</label>
                    <input type="text" className="form-control editProfileInput" placeholder="Заполните поле..." />
                  </div>
                  <div className="col-sm">
                    <label class="form-label labelEditBold">VK</label>
                    <input type="text" className="form-control editProfileInput" value="viil_ru" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm saveChanges">
                    <button type="submit" className="purpleButton">Сохранить</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
