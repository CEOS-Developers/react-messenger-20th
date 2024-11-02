export function generateId() {
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, ''); // 날짜와 시간 정보를 YYYYMMDDHHMMSS 형식으로 변환
  const randomPart = 'xxxx-xxxx'.replace(/[x]/g, () => {
    return ((Math.random() * 16) | 0).toString(16);
  });

  return `${timestamp}-${randomPart}`; // 날짜 시간과 랜덤 값을 조합
}
