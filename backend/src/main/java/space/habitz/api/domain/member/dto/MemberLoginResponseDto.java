package space.habitz.api.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import space.habitz.api.domain.member.entity.Member;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class MemberLoginResponseDto {
	private Long userId;
	private String profileImage;
	private String name;
	private String nickName;
	private JwtTokenDto jwtToken;

	public MemberLoginResponseDto(Member member, JwtTokenDto jwtToken) {
		this.userId = member.getId();
		this.profileImage = member.getImage();
		this.name = member.getName();
		this.nickName = member.getNickname();
		this.jwtToken = jwtToken;
	}
}
