/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppLayout, Button } from "src/components";
import * as S from "./styled";

export type RegisterStep1Values = {
  service: boolean;
  privacy: boolean;
  student: boolean;
  marketing: boolean;
};

export const AgreePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterStep1Values>();

  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const onSubmit = ({ service, privacy, student }: RegisterStep1Values) => {};
  const navigate = useNavigate();

  const allAgreeHandler = useCallback(() => {
    if (!isAllChecked) {
      setIsAllChecked(true);
      reset({ service: true, privacy: true, student: true, marketing: true });
    } else {
      setIsAllChecked(false);
      reset({ service: false, privacy: false, student: false, marketing: false });
    }
  }, [isAllChecked, reset]);

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.student && value.service && value.privacy && value.marketing) {
        return setIsAllChecked(true);
      }
      return setIsAllChecked(false);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <AppLayout title="인포크 회원가입/서비스 이용약관 동의" src="/auth/login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.AgreeCheckBoxWrapper>
          <label htmlFor="isAllChecked">
            <S.CircleCheck checked={isAllChecked} />
            <S.NoneCheckBox
              id="isAllChecked"
              type="checkbox"
              onClick={() => {
                allAgreeHandler();
              }}
            />{" "}
          </label>
          <S.AgreeCheckBoxTitle>전체 동의(선택 항목 포함)</S.AgreeCheckBoxTitle>
        </S.AgreeCheckBoxWrapper>
        <S.AgreeCheckBoxContainer>
          <S.AgreeCheckBoxWrapper>
            <label htmlFor="student">
              <S.CircleCheck checked={watch("student")} />
              <S.NoneCheckBox id="student" type="checkbox" {...register("student")} />{" "}
            </label>
            <S.AgreeCheckBoxTitle>
              만 14세 이상입니다<S.AgreeImportantMark>(필수)</S.AgreeImportantMark>
            </S.AgreeCheckBoxTitle>
          </S.AgreeCheckBoxWrapper>
          {errors.student?.message}
          <S.AgreeCheckBoxWrapper>
            <label htmlFor="service">
              <S.CircleCheck checked={watch("service")} />
              <S.NoneCheckBox
                id="service"
                type="checkbox"
                {...register("service", {
                  required: "필수 응답 항목입니다.",
                })}
              />{" "}
            </label>
            <S.AgreeCheckBoxTitle>
              서비스 이용약관<S.AgreeImportantMark>(필수)</S.AgreeImportantMark>
            </S.AgreeCheckBoxTitle>
          </S.AgreeCheckBoxWrapper>
          {errors.service?.message}
          <S.AgreeCheckBoxWrapper>
            <label htmlFor="privacy">
              <S.CircleCheck checked={watch("privacy")} />
              <S.NoneCheckBox
                id="privacy"
                type="checkbox"
                {...register("privacy", {
                  required: "필수 응답 항목입니다.",
                })}
              />{" "}
            </label>
            <S.AgreeCheckBoxTitle>
              개인정보 수집 이용 동의<S.AgreeImportantMark>(필수)</S.AgreeImportantMark>
            </S.AgreeCheckBoxTitle>
          </S.AgreeCheckBoxWrapper>
          {errors.privacy?.message}
          <S.AgreeCheckBoxWrapper>
            <label htmlFor="marketing">
              <S.CircleCheck checked={watch("marketing")} />
              <S.NoneCheckBox
                id="marketing"
                type="checkbox"
                {...register("marketing", {
                  required: "필수 응답 항목입니다.",
                })}
              />{" "}
            </label>
            <S.AgreeCheckBoxTitle>마케팅 정보 수신 동의(선택)</S.AgreeCheckBoxTitle>
          </S.AgreeCheckBoxWrapper>
          {errors.marketing?.message}
        </S.AgreeCheckBoxContainer>
        <Button
          variant="contained"
          disabled={!watch("student") || !watch("service") || !watch("privacy")}
          onClick={() => navigate("/auth/register/telcheck")}
        >
          다음으로
        </Button>
      </form>
    </AppLayout>
  );
};
