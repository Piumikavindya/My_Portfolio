import React, { useEffect, useMemo, useState } from "react";
import {
    ArrowBackRounded,
    ArrowForwardRounded,
    CloseRounded,
    GitHub,
    OpenInNewRounded,
    ShareRounded,
} from "@mui/icons-material";
import { Modal } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background:
        radial-gradient(circle at top left, rgba(255, 153, 51, 0.18), transparent 30%),
        radial-gradient(circle at top right, rgba(73, 144, 226, 0.16), transparent 28%),
        rgba(4, 7, 15, 0.84);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto;
    padding: 28px 16px 40px;
    transition: all 0.4s ease;
`;

const Wrapper = styled.div`
    width: min(1180px, 100%);
    border-radius: 28px;
    margin: 28px 0;
    background:
        linear-gradient(180deg, rgba(17, 24, 39, 0.96), rgba(10, 14, 22, 0.98));
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.text_primary};
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
    position: relative;
    overflow: hidden;
`;

const Shell = styled.div`
    padding: 28px;
    @media only screen and (max-width: 768px) {
        padding: 18px;
    }
`;

const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 20px;
`;

const Eyebrow = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 153, 51, 0.12);
    color: #ffb15e;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
`;

const TitleBlock = styled.div`
    margin-top: 16px;
`;

const Title = styled.h2`
    margin: 0;
    font-size: clamp(28px, 4vw, 48px);
    line-height: 1.06;
    font-weight: 800;
    color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.div`
    margin-top: 10px;
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
`;

const CloseButton = styled.button`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    color: ${({ theme }) => theme.text_primary};
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.25s ease;
    flex: 0 0 auto;

    &:hover {
        transform: scale(1.05);
        background: rgba(255, 255, 255, 0.1);
    }
`;

const Layout = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 1.7fr) minmax(320px, 0.9fr);
    gap: 24px;

    @media only screen and (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;

const MediaCard = styled.div`
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    min-height: 360px;
    background: linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
`;

const MediaImage = styled.img`
    width: 100%;
    height: 100%;
    min-height: 360px;
    object-fit: cover;
    display: block;
`;

const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(7, 10, 18, 0.72);
    color: white;
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 2;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        background: rgba(255, 153, 51, 0.18);
        transform: translateY(-50%) scale(1.04);
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }
`;

const PrevButton = styled(NavButton)`
    left: 16px;
`;

const NextButton = styled(NavButton)`
    right: 16px;
`;

const Counter = styled.div`
    position: absolute;
    left: 16px;
    bottom: 16px;
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(4, 7, 15, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: ${({ theme }) => theme.text_primary};
    font-size: 12px;
    font-weight: 600;
    z-index: 2;
`;

const Thumbnails = styled.div`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-top: 12px;
    scrollbar-width: thin;
`;

const ThumbnailButton = styled.button`
    flex: 0 0 auto;
    width: 88px;
    height: 58px;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid transparent;
    background: transparent;
    padding: 0;
    cursor: pointer;
    opacity: ${({ active }) => (active ? 1 : 0.66)};
    border-color: ${({ active }) => (active ? "rgba(255, 153, 51, 0.95)" : "rgba(255, 255, 255, 0.08)")};
    box-shadow: ${({ active }) => (active ? "0 0 0 3px rgba(255, 153, 51, 0.14)" : "none")};
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Sidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const Panel = styled.section`
    padding: 18px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
`;

const PanelTitle = styled.h3`
    margin: 0 0 14px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #ffb15e;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
`;

const Section = styled.section`
    padding: 20px;
    border-radius: 22px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
`;

const SectionTitle = styled.h3`
    margin: 0 0 12px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #ffb15e;
`;

const Overview = styled.p`
    margin: 0;
    font-size: 16px;
    line-height: 1.8;
    color: ${({ theme }) => theme.text_primary};
`;

const Highlights = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 12px;
`;

const Highlight = styled.li`
    position: relative;
    padding-left: 18px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 1.65;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 10px;
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: linear-gradient(135deg, #ff9f43, #ff5d8f);
        box-shadow: 0 0 0 4px rgba(255, 159, 67, 0.14);
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const Tag = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 153, 51, 0.28);
    background: rgba(255, 153, 51, 0.08);
`;

const LinkList = styled.div`
    display: grid;
    gap: 12px;
`;

const LinkButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 14px 16px;
    border-radius: 16px;
    text-decoration: none;
    color: ${({ theme }) => theme.text_primary};
    background: linear-gradient(135deg, rgba(255, 153, 51, 0.18), rgba(255, 92, 138, 0.12));
    border: 1px solid rgba(255, 153, 51, 0.2);
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        border-color: rgba(255, 153, 51, 0.45);
    }
`;

const LinkButtonAlt = styled(LinkButton)`
    background: rgba(255, 255, 255, 0.03);
`;

const LinkLabel = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
`;

const LinkMeta = styled.span`
    color: ${({ theme }) => theme.text_secondary};
    font-size: 13px;
`;

const ButtonRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;

    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

const ActionButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 14px 18px;
    border-radius: 16px;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ primary }) => (primary ? "linear-gradient(135deg, #ff9f43, #ff5d8f)" : "rgba(255, 255, 255, 0.04)")};
    border: 1px solid ${({ primary }) => (primary ? "transparent" : "rgba(255, 255, 255, 0.1)")};
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

const createFallbackHighlights = (project) => {
    const sentences = (project?.description || "")
        .split(".")
        .map((sentence) => sentence.trim())
        .filter(Boolean);

    if (sentences.length >= 3) {
        return sentences.slice(0, 3);
    }

    return (project?.tags || []).slice(0, 3).map((tag) => `Built with ${tag}`);
};

const ProjectDetails = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const gallery = useMemo(() => {
        const images = Array.isArray(project?.gallery) ? project.gallery.filter(Boolean) : [];
        if (project?.image) {
            return images.includes(project.image) ? images : [project.image, ...images];
        }
        return images;
    }, [project]);

    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const highlightItems = project?.highlights?.length ? project.highlights : createFallbackHighlights(project);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [project?.id, gallery.length]);

    const activeImage = gallery[activeImageIndex] || project?.image;
    const hasMultipleImages = gallery.length > 1;

    const goPrevious = () => {
        if (!hasMultipleImages) return;
        setActiveImageIndex((current) => (current - 1 + gallery.length) % gallery.length);
    };

    const goNext = () => {
        if (!hasMultipleImages) return;
        setActiveImageIndex((current) => (current + 1) % gallery.length);
    };

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper>
                    <Shell>
                        <TopBar>
                            <div>
                                <Eyebrow>Project Detail</Eyebrow>
                                <TitleBlock>
                                    <Title>{project?.title}</Title>
                                    <Date>{project?.date}</Date>
                                </TitleBlock>
                            </div>

                            <CloseButton
                                aria-label="Close project details"
                                onClick={() => setOpenModal({ state: false, project: null })}
                            >
                                <CloseRounded fontSize="small" />
                            </CloseButton>
                        </TopBar>

                        <Layout>
                            <div>
                                <MediaCard>
                                    {activeImage ? (
                                        <MediaImage src={activeImage} alt={project?.title || "Project image"} />
                                    ) : null}

                                    {hasMultipleImages && (
                                        <>
                                            <PrevButton type="button" onClick={goPrevious} aria-label="Previous image">
                                                <ArrowBackRounded fontSize="small" />
                                            </PrevButton>
                                            <NextButton type="button" onClick={goNext} aria-label="Next image">
                                                <ArrowForwardRounded fontSize="small" />
                                            </NextButton>
                                            <Counter>
                                                {activeImageIndex + 1} / {gallery.length}
                                            </Counter>
                                        </>
                                    )}
                                </MediaCard>

                                {hasMultipleImages && (
                                    <Thumbnails>
                                        {gallery.map((image, index) => (
                                            <ThumbnailButton
                                                key={`${image}-${index}`}
                                                type="button"
                                                active={index === activeImageIndex}
                                                onClick={() => setActiveImageIndex(index)}
                                            >
                                                <Thumbnail src={image} alt={`${project?.title || "Project"} preview ${index + 1}`} />
                                            </ThumbnailButton>
                                        ))}
                                    </Thumbnails>
                                )}

                                <Body>
                                    <Section>
                                        <SectionTitle>Overview</SectionTitle>
                                        <Overview>{project?.description}</Overview>
                                    </Section>

                                    <Section>
                                        <SectionTitle>Key Highlights</SectionTitle>
                                        <Highlights>
                                            {highlightItems.map((highlight, index) => (
                                                <Highlight key={`${highlight}-${index}`}>{highlight}</Highlight>
                                            ))}
                                        </Highlights>
                                    </Section>
                                </Body>
                            </div>

                            <Sidebar>
                                <Panel>
                                    <PanelTitle>Tech Stack</PanelTitle>
                                    <Tags>
                                        {project?.tags?.map((tag, index) => (
                                            <Tag key={`${tag}-${index}`}>{tag}</Tag>
                                        ))}
                                    </Tags>
                                </Panel>

                                <Panel>
                                    <PanelTitle>Links</PanelTitle>
                                    <LinkList>
                                        {project?.github && (
                                            <LinkButton href={project.github} target="_blank" rel="noreferrer">
                                                <LinkLabel>
                                                    <GitHub fontSize="small" />
                                                    GitHub
                                                </LinkLabel>
                                                <LinkMeta>Source code</LinkMeta>
                                            </LinkButton>
                                        )}



                                        <LinkButtonAlt href={project?.github || project?.webapp || "#"} target="_blank" rel="noreferrer">
                                            <LinkLabel>
                                                <ShareRounded fontSize="small" />
                                                Share Project
                                            </LinkLabel>
                                            <LinkMeta>Copy the link later if needed</LinkMeta>
                                        </LinkButtonAlt>
                                    </LinkList>
                                </Panel>

                                <Panel>
                                    <PanelTitle>Quick Actions</PanelTitle>
                                    <ButtonRow>

                                        {project && (
                                            <ActionButton href={project} target="_blank" rel="noreferrer" primary>
                                                Live Demo
                                            </ActionButton>
                                        )}
                                    </ButtonRow>
                                </Panel>
                            </Sidebar>
                        </Layout>
                    </Shell>
                </Wrapper>
            </Container>
        </Modal>
    );
};

export default ProjectDetails;