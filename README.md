<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.14.0`
* __Run:__ Mon Jun 10 2024 01:19:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.14.0 | ✗      | 46252.8    | 21.11        | 8.25          |
| connect                  | 3.7.0    | ✗      | 45605.0    | 21.42        | 8.13          |
| polkadot                 | 1.0.0    | ✗      | 45203.2    | 21.62        | 8.06          |
| kita                     | 1.1.36   | ✓      | 45162.4    | 21.65        | 8.10          |
| polka                    | 0.5.2    | ✓      | 45141.6    | 21.65        | 8.05          |
| fastify                  | 4.27.0   | ✓      | 44923.2    | 21.76        | 8.05          |
| rayo                     | 1.4.6    | ✓      | 44303.2    | 22.08        | 7.90          |
| 0http                    | 3.5.3    | ✓      | 44037.6    | 22.22        | 7.85          |
| server-base-router       | 7.1.32   | ✓      | 43032.0    | 22.73        | 7.67          |
| server-base              | 7.1.32   | ✗      | 42896.8    | 22.81        | 7.65          |
| connect-router           | 1.3.8    | ✓      | 42197.6    | 23.19        | 7.53          |
| h3-router                | 1.11.1   | ✓      | 41498.4    | 23.60        | 7.40          |
| h3                       | 1.11.1   | ✗      | 40908.8    | 23.96        | 7.30          |
| hono                     | 4.4.4    | ✓      | 38305.6    | 25.60        | 6.83          |
| restana                  | 4.9.9    | ✓      | 37922.6    | 25.87        | 6.76          |
| koa                      | 2.15.3   | ✗      | 36168.6    | 27.14        | 6.45          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34527.2    | 28.46        | 6.16          |
| take-five                | 2.0.0    | ✓      | 34359.4    | 28.61        | 12.35         |
| koa-router               | 12.0.1   | ✓      | 33231.4    | 29.58        | 5.93          |
| restify                  | 11.1.0   | ✓      | 32966.0    | 29.83        | 5.94          |
| hapi                     | 21.3.9   | ✓      | 29824.4    | 33.03        | 5.32          |
| fastify-big-json         | 4.27.0   | ✓      | 11482.4    | 86.53        | 132.12        |
| express                  | 4.19.2   | ✓      | 10932.8    | 90.90        | 1.95          |
| express-with-middlewares | 4.19.2   | ✓      | 10171.4    | 97.72        | 3.78          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
