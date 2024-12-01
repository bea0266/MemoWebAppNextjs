export default function SettingAreaView() {
    return (
      <div>
        설정 영역
        <h1>기간 설정</h1>
        <p>기간을 설정해주세요</p>
        <select>
          <option selected>기간 선택</option>
          <option>이번 해</option>
          <option>이번 달</option>
          <option>이번 주</option>
        </select>
      </div>
    );
  }
  